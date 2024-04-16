import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "../socket";
import { authProvider } from "../auth";

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
    toast.error("Class have not start yet");
    return redirect("/dashboard");
  }

  if (successStatus) {
    return redirect(`/canvas/${id}`);
  }
}
