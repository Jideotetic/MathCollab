import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { server } from "../socket";
import { db } from "../firebase";
import {
  Unsubscribe,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { ClassData } from "../@types/types";

export default async function startClassAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const id = formData.get("id") as string;

  const classeRef = doc(db, `classes`, id);
  await updateDoc(classeRef, {
    status: "ongoing",
  });

  const fetchClasses = new Promise<{
    classes: ClassData[];
    unsubscribe: Unsubscribe;
  }>((resolve) => {
    const classes: ClassData[] = [];
    const classesRef = collection(db, "classes");
    const unsubscribe = onSnapshot(classesRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        classes.push({
          id: change.doc.id,
          ...(change.doc.data() as {
            likes: number;
            likedBy: string[];
            name: string;
            status: string;
            title: string;
            user: string;
            video: string;
            views: number;
          }),
        });
      });
      resolve({ classes, unsubscribe });
    });
  });

  const res = await fetchClasses;

  console.log(res.classes);

  server.emit("send-classes", res.classes);
  server.emit("start-class", id);

  // res.unsubscribe();

  return redirect(`/canvas/${id}`);
}
