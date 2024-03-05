import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { temp } from "../otp";
import { server } from "../contexts/socket";
import { authProvider } from "../auth";

export async function signUpFormAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const firstName = formData.get("First Name")!.toString();
  const lastName = formData.get("Last Name")!.toString();
  const email = formData.get("Email")!.toString();
  const password = formData.get("Password")!.toString();

  return authProvider.signup(email, password, firstName, lastName);
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

  return authProvider.login(email, password);
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

export async function signoutAction() {
  authProvider.signout();
  return redirect("/");
}

export async function createClassAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const className = formData.get("Class name");
  // const collaborators = formData.get("collaborators");
  const user = authProvider.user;

  // server.emit("user-create", { className, user, host: true });
  server.emit("user-joined", { className, user, host: true });

  return redirect(`/canvas/${className}`);
}

export async function joinClassAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const className = formData.get("Enter/Paste class name");
  const user = authProvider.user;

  server.emit("user-joined", { className, user, host: false });

  const inActiveClass = await new Promise((resolve) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      resolve(false);
      console.log("Timeout waiting for inactive-class event");
    }, 1000);

    server.on("inactive-class", (data) => {
      clearTimeout(timeout);
      resolve(data.success);
      console.log("inactive", data.success);
    });
  });

  console.log(inActiveClass);

  if (inActiveClass) {
    toast.error("No active class");
    console.log("inactive");
    return redirect(`${new URL(request.url).origin}/dashboard`);
  } else {
    console.log("active");
    return redirect(`/canvas/${className}`);
  }
}
