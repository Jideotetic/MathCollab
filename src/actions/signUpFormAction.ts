import { ActionFunctionArgs } from "react-router-dom";
import { authProvider } from "../auth";

export default async function signUpFormAction({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const firstName = formData.get("First Name")!.toString();
  const lastName = formData.get("Last Name")!.toString();
  const email = formData.get("Email")!.toString();
  const password = formData.get("Password")!.toString();

  return authProvider.signup(email, password, firstName, lastName);
}
