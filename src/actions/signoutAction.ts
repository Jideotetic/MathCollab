import { redirect } from "react-router-dom";
import { authProvider } from "../auth";

export default async function signoutAction() {
  authProvider.signout();
  return redirect("/");
}
