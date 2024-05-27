import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
// import { server } from "../socket";
import { toast } from "react-toastify";
import { server } from "../socket";
import { Unsubscribe, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ClassData } from "../@types/types";
// import { ClassData } from "../@types/types";
// import { Unsubscribe, collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase";

// function fetchDocumentById(docId: string) {
//   collection(db, "classes")
//     .doc(docId)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         const item = doc.data();
//         console.log(item);
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching document:", error);
//     });
// }

export default async function canvasLoader({ params }: LoaderFunctionArgs) {
  console.log("Canvas");
  console.log(params.id);

  try {
    await authProvider.checkAuth();

    if (!authProvider.user) {
      toast.info("Sign in to access class");
      return redirect("/");
    }

    // let texts: string[] = [];
    let host: boolean = false;

    server.on("class-started", (data) => {
      const { success } = data;
      host = data.host;
      if (success) {
        toast.success("Class started successfully");
      }
    });

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

    const ongoingClass = res.classes.filter((classes) => {
      return params.id === classes.id;
    });

    if (ongoingClass[0].status === "upcoming") {
      toast.error("Class has not start");
      return redirect("/dashboard");
    }

    // server.on("joined", (data) => {
    //   const { user } = data;
    //   toast.success(`${user.displayName} joined the class`);
    // });

    // server.on("joined-successfully", (data) => {
    //   // host = data.host
    //   console.log(data);
    // });

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
      host,
      cleanup: res.unsubscribe,
    };
  } catch (error) {
    console.error(error);
  }
}
