import { redirect, ActionFunctionArgs } from "react-router-dom";
import { server } from "../socket";

export default async function canvasAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const id = formData.get("id");
  const text = formData.get("text");
  server.emit("text", text);

  console.log(id);
  return redirect(`/canvas/${id}`);
}
