import { redirect, ActionFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { temp } from "../otp";

export default async function resetPasswordFormAction({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("Email")!.toString();

  temp.email = email;

  const otpValue = temp.otpValue;

  function sendOTP() {
    const templateParams = {
      to_email: email,
      to_name: "Collaborator",
      message: otpValue,
    };

    emailjs
      .send(
        "service_gmfhpbo",
        "template_q4nt0w6",
        templateParams,
        "ATX_F8kDIENLslJVM",
      )
      .then(() => {
        toast.success("Email sent successfully!");
      })
      .catch(() => {
        toast.error("Error sending email contact administrator");
      });
  }

  sendOTP();

  return redirect("/verify-password-reset");
}
