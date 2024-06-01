import { doc, updateDoc } from "firebase/firestore";
import { redirect, ActionFunctionArgs } from "react-router-dom";
import { server } from "../socket";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default async function startClassAction({
  request,
}: ActionFunctionArgs) {
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

  server.emit("start-class", id);

  return redirect(`/canvas/${id}`);
}
