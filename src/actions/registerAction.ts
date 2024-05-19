import { LoaderFunctionArgs } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { server } from "../socket";
import { toast } from "react-toastify";

export default async function registerAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const lesson = JSON.parse(formData.get("lesson") as string);
  const email = formData.get("email");

  if (lesson.collaborators.includes(email)) {
    return toast.error("You are registered already!");
  } else {
    const docRef = doc(db, `classes/${lesson.id}`);
    await updateDoc(docRef, {
      collaborators: [...lesson.collaborators, email],
    });
  }

  server.emit("register", {
    lesson,
  });

  return toast.success("Successfully registered");
}
