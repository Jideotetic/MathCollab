import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import {server} from "../socket";

export default async function likeButtonAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const lesson = JSON.parse(formData.get("lesson"));
  const name = formData.get("user");


    if (lesson.likedBy.includes(name)) {
      const docRef = doc(db, `classes/${lesson.id}`);
      await updateDoc(docRef, {
        likes: lesson.likes - 1,
        likedBy: lesson.likedBy.filter((item) => item !== name),
      });
    } else {
      const docRef = doc(db, `classes/${lesson.id}`);
      await updateDoc(docRef, {
        likes: lesson.likes + 1,
        likedBy: [...lesson.likedBy, name],
      });
    }

  console.log(lesson.likedBy);

  redirect("/dashboard");
  return null;
}
