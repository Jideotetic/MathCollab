import { redirect, ActionFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import { temp } from "../otp";

export default async function verifyPasswordResetFormAction({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();

  const box1 = formData.get("0")!.toString();
  const box2 = formData.get("1")!.toString();
  const box3 = formData.get("2")!.toString();
  const box4 = formData.get("3")!.toString();

  const otpValue = temp.otpValue;

  const otp = box1 + box2 + box3 + box4;

  if (otp !== otpValue) {
    return toast.error("Incorrect OTP");
  } else {
    temp.email = "";
    return redirect("/new-password");
  }
}
