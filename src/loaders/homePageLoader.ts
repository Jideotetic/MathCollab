import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { ClassData } from "../@types/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default async function homePageLoader() {
  try {
    // checks if a user is logged in and redirects to dashboard
    if (localStorage.getItem("user")) {
      return redirect("/dashboard");
    }

    // checks if a user is authenticated
    await authProvider.checkAuth();

    const classes: ClassData[] = [];

    const docRef = collection(db, "classes");
    const docSnap = await getDocs(docRef);

    if (docSnap.docChanges()) {
      docSnap.docChanges().forEach((snapshot) => {
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
    //       // Checks if individual class is present in the list of classes
    //       const existingIndex = classes.findIndex(
    //         (item) => item.id === change.doc.id,
    //       );

    //       //Replaces the class in the list if it exists
    //       if (existingIndex !== -1) {
    //         classes[existingIndex] = {
    //           id: change.doc.id,
    //           ...(change.doc.data() as ClassData),
    //         };
    //         // Push the class onto the list if it does not exist
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

    return {
      classes,
    };
  } catch (error) {
    console.error(error);
  }
}
