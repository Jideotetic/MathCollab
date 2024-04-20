import { LoaderFunctionArgs } from "react-router-dom";
import { authProvider } from "../auth";
import { server } from "../socket";
import { toast } from "react-toastify";
import { ClassData } from "../@types/types";
import { Unsubscribe, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default async function canvasLoader({ params }: LoaderFunctionArgs) {
  console.log("Canvas");
  console.log(params.id);

  try {
    await authProvider.checkAuth();

    let texts: string[] = [];

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
                likedBy: string[];
                status: string;
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

    console.log(res.classes);

    server.emit("send-classes", res.classes);

    server.on("class-started", (data) => {
      const { success } = data;
      console.log(success);
      if (success) {
        toast.success("Class started successfully");
      }
    });

    server.on("joined", (data) => {
      const { user } = data;
      toast.success(`${user.displayName} joined the class`);
    });

    const fetchInitialTexts = new Promise((resolve) => {
      server.on("initial-text", (globalTexts) => {
        texts = globalTexts;
        // console.log(texts);
        resolve(texts);
      });
    });

    const initialTexts = (await fetchInitialTexts) as string[];
    // console.log(initialTexts);

    return {
      currentUser: authProvider.user,
      classes: res.classes,
      initialTexts,
      cleanup: res.unsubscribe,
    };
  } catch (error) {
    console.error(error);
  }
}
