import { redirect, ActionFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";

export default async function newPasswordFormAction({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();

  const newPassword = formData.get("Enter new password")!.toString();
  const confirmNewPassword = formData.get("Confirm new password")!.toString();

  if (newPassword !== confirmNewPassword) {
    return toast.error("Password does not match");
  } else {
    toast.success("Password reset complete");
    return redirect("/login");
  }
}
