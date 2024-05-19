import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "../socket";
import { authProvider } from "../auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function joinClassAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const id = formData.get("id");

  console.log(id);

  server.emit("join-class", { id, user: authProvider.user });

  const joinPromise = new Promise((resolve) => {
    server.on("failed-join", (data) => {
      const { success } = data;
      console.log(success);
      resolve(success);
    });

    server.on("joined-successfully", (data) => {
      const { success } = data;
      console.log(success);
      resolve(success);
    });
  });

  const successStatus = await joinPromise;

  console.log(successStatus);

  if (!successStatus) {
    toast.success("You have successfully registered");
    // const classeRef = doc(db, `classes`, id);
    // await updateDoc(classeRef, {
    //   collaborators: [],
    // });
    return redirect("/dashboard");
  }

  if (successStatus) {
    return redirect(`/canvas/${id}`);
  }
}
