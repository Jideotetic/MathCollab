import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { server } from "../socket";
import { ClassData } from "../@types/types";
import {
  Unsubscribe,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search")?.toLocaleLowerCase() || "";

  try {
    await authProvider.checkAuth();

    if (!authProvider.user) {
      return redirect("/");
    }

    localStorage.setItem("user", JSON.stringify(authProvider.user));

    const fetchClasses = new Promise<{
      classes: ClassData[];
      unsubscribe: Unsubscribe;
    }>((resolve) => {
      const classes: ClassData[] = [];
      const classesRef = collection(db, "classes");
      const unsubscribe = onSnapshot(classesRef, async (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          if (
            change.doc.data().status === "ongoing" &&
            change.doc.data().creatorName === authProvider.user?.displayName
          ) {
            const docRef = doc(db, `classes`, change.doc.id);
            await updateDoc(docRef, {
              status: "upcoming",
            });
            server.emit("stopped-class", "end");
          }

          const existingIndex = classes.findIndex(
            (item) => item.id === change.doc.id,
          );

          if (existingIndex !== -1) {
            classes[existingIndex] = {
              id: change.doc.id,
              ...(change.doc.data() as ClassData),
            };
          } else {
            classes.push({
              id: change.doc.id,
              ...(change.doc.data() as ClassData),
            });
          }
        });
        resolve({ classes, unsubscribe });
      });
    });

    const res = await fetchClasses;

    let filteredClasses;

    if (!search) {
      filteredClasses = res.classes;
    } else {
      filteredClasses = res.classes.filter((lesson) => {
        return lesson.classTitle.toLocaleLowerCase().includes(search!);
      });
    }

    return {
      currentUser: authProvider.user,
      filteredClasses,
      search,
      cleanup: () => res.unsubscribe(),
    };
  } catch (error) {
    console.log(error);
  }
}
