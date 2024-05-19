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
import { toast } from "react-toastify";

export default async function startClassAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const id = formData.get("id") as string;
  const startDate = formData.get("start-date") as string;
  const tempStartDate = new Date(startDate);
  const currentDate = new Date();

  if (currentDate < tempStartDate) {
    return toast.error("Time to start class not reached");
  }

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
          ...(change.doc.data() as ClassData),
        });
      });
      resolve({ classes, unsubscribe });
    });
  });

  const res = await fetchClasses;

  server.emit("send-classes", res.classes);
  server.emit("start-class", id);

  return redirect(`/canvas/${id}`);
}
