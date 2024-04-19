import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default async function createClassAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const className = formData.get("Class name");
  // const collaborators = formData.get("collaborators");
  const user = authProvider.user;

  console.log("upcoming");

  const classesRef = collection(db, "classes");
  await addDoc(classesRef, {
    likes: 0,
    name: user?.displayName,
    status: "upcoming",
    title: className,
    user: user?.photoURL,
    video: "",
    views: 0,
    likedBy: [],
  });

  console.log("upcoming");

  return redirect(`/dashboard`);
}
