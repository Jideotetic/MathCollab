import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
// import { server } from "../socket";
import { toast } from "react-toastify";
import { server } from "../socket";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ClassData } from "../@types/types";

export default async function canvasLoader({ params }: LoaderFunctionArgs) {
  try {
    await authProvider.checkAuth();

    if (!authProvider.user) {
      toast.info("Sign in to access class");
      return redirect("/");
    }

    // let texts: string[] = [];

    const classes: ClassData[] = [];

    const docRef = collection(db, "classes");
    const docSnap = await getDocs(docRef);

    if (docSnap.docChanges()) {
      docSnap.docChanges().forEach(async (snapshot) => {
        classes.push({
          id: snapshot.doc.id,
          ...(snapshot.doc.data() as ClassData),
        });
      });
    } else {
      // return empty classes
      return classes;
    }

    // const fetchClasses = new Promise<{
    //   classes: ClassData[];
    //   unsubscribe: Unsubscribe;
    // }>((resolve) => {
    //   const classes: ClassData[] = [];
    //   const classesRef = collection(db, "classes");
    //   const unsubscribe = onSnapshot(classesRef, (snapshot) => {
    //     snapshot.docChanges().forEach((change) => {
    //       const existingIndex = classes.findIndex(
    //         (item) => item.id === change.doc.id,
    //       );

    //       if (existingIndex !== -1) {
    //         classes[existingIndex] = {
    //           id: change.doc.id,
    //           ...(change.doc.data() as ClassData),
    //         };
    //       } else {
    //         classes.push({
    //           id: change.doc.id,
    //           ...(change.doc.data() as ClassData),
    //         });
    //       }
    //     });
    //     resolve({ classes, unsubscribe });
    //   });
    // });

    // const res = await fetchClasses;

    const ongoingClass = classes.filter((lesson) => {
      return params.id === lesson.id;
    });

    if (ongoingClass[0].status === "upcoming") {
      toast.error("Class has not start");
      return redirect("/dashboard");
    }

    server.on("class-started", () => {
      toast.success("Class started successfully");
    });

    // const fetchInitialTexts = new Promise((resolve) => {
    //   server.on("initial-text", (globalTexts) => {
    //     texts = globalTexts;
    //     resolve(texts);
    //   });
    // });

    // const initialTexts = (await fetchInitialTexts) as string[];

    return {
      currentUser: authProvider.user,
      // initialTexts,
    };
  } catch (error) {
    console.error(error);
  }
}
