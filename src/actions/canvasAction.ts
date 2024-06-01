import { ActionFunctionArgs } from "react-router-dom";
import { server } from "../socket";

export default async function canvasAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const id = formData.get("id");
  const text = formData.get("text") as string;
  const classContent = formData.get("class-content") as string;
  const content = classContent.split(",");
  content.push(text);
  server.emit("text", { content, id });

  console.log(content);
  return null;
}
