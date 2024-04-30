import { LoaderFunctionArgs } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { server } from "../socket";

export default async function likeButtonAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const lesson = JSON.parse(formData.get("lesson") as string);
  const name = formData.get("user");

  if (lesson.likedBy.includes(name)) {
    const docRef = doc(db, `classes/${lesson.id}`);
    await updateDoc(docRef, {
      likes: lesson.likes - 1,
      likedBy: lesson.likedBy.filter((item: string) => item !== name),
    });
  } else {
    const docRef = doc(db, `classes/${lesson.id}`);
    await updateDoc(docRef, {
      likes: lesson.likes + 1,
      likedBy: [...lesson.likedBy, name],
    });
  }

  server.emit("like", {
    lesson,
  });
  
  return null;
}
