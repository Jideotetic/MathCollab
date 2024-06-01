import { redirect, ActionFunctionArgs } from "react-router-dom";
import { server } from "../socket";
import { authProvider } from "../auth";

export default async function joinClassAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const id = formData.get("id");

  console.log(id);

  server.emit("join-class", { id, user: authProvider.user });

  // const joinPromise = new Promise((resolve) => {
  //   server.on("joined-successfully", (data) => {
  //     const { success } = data;
  //     console.log(success);
  //     resolve(success);
  //   });
  // });

  // const successStatus = await joinPromise;

  // console.log(successStatus);

  // if (successStatus) {
  return redirect(`/canvas/${id}`);
  // }
}
