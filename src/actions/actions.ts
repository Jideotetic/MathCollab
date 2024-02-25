import { redirect, LoaderFunctionArgs } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { temp } from "../otp";

export async function signUpFormAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  //   const firstName = formData.get("First Name")!.toString();
  //   const lastName = formData.get("Last Name")!.toString();
  const email = formData.get("Email")!.toString();
  const password = formData.get("Password")!.toString();

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

  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      sendOTP();
      return redirect("/verify-email");
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        temp.email = "";
        return toast.error("Email Already in Use");
      } else if (error.code === "auth/invalid-email") {
        temp.email = "";
        return toast.error("Invalid email");
      }
    });
}

export async function verifyEmailFormAction({ request }: LoaderFunctionArgs) {
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
    return redirect("/login");
  }
}

export async function loginFormAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("Email")!.toString();
  const password = formData.get("Password")!.toString();

  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return redirect("/dashboard");
    })
    .catch(() => {
      return toast.error("Password or Email invalid");
    });
}

export async function resetPasswordFormAction({ request }: LoaderFunctionArgs) {
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

export async function verifyPasswordResetFormAction({
  request,
}: LoaderFunctionArgs) {
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

export async function newPasswordFormAction({ request }: LoaderFunctionArgs) {
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
