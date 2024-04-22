import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { server } from "../socket";
import { ClassData } from "../@types/types";
import { Unsubscribe, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default async function homePageLoader() {
  try {
    if (localStorage.getItem("user")) {
      return redirect("/dashboard");
    }

    await authProvider.checkAuth();

    const fetchClasses = new Promise<{
      classes: ClassData[];
      unsubscribe: Unsubscribe;
    }>((resolve) => {
      const classes: ClassData[] = [];
      const classesRef = collection(db, "classes");
      const unsubscribe = onSnapshot(classesRef, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const existingIndex = classes.findIndex(
            (item) => item.id === change.doc.id,
          );

          if (existingIndex !== -1) {
            classes[existingIndex] = {
              id: change.doc.id,
              ...(change.doc.data() as {
                likes: number;
                name: string;
                status: string;
                likedBy: string[];
                title: string;
                user: string;
                video: string;
                views: number;
              }),
            };
          } else {
            classes.push({
              id: change.doc.id,
              ...(change.doc.data() as {
                likes: number;
                name: string;
                likedBy: string[];
                status: string;
                title: string;
                user: string;
                video: string;
                views: number;
              }),
            });
          }
        });
        resolve({ classes, unsubscribe });
      });
    });

    const res = await fetchClasses;

    server.emit("send-classes", res.classes);

    return {
      classes: res.classes,
      cleanup: () => res.unsubscribe(),
    };
  } catch (error) {
    console.error(error);
  }
}
