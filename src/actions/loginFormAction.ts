import { ActionFunctionArgs } from "react-router-dom";
import { authProvider } from "../auth";

export default async function loginFormAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("Email")!.toString();
  const password = formData.get("Password")!.toString();

  return authProvider.login(email, password);
}
