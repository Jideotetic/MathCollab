import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { temp } from "../otp";
import { server } from "../socket";
import { authProvider } from "../auth";
// import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { ClassData } from "../loaders/loaders";

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

  const classesRef = collection(db, "classes");
  addDoc(classesRef, {
    likes: 0,
    name: user?.displayName,
    status: "created",
    title: className,
    user: user?.photoURL,
    video: "",
    views: 0,
  });

  return redirect(`/dashboard`);
}

export async function startClassAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const id = formData.get("id");

  const classeRef = doc(db, `classes/${id}`);
  updateDoc(classeRef, {
    status: "ongoing",
  });

  const fetchClasses = new Promise((resolve) => {
    const classes: ClassData[] = [];
    const classesRef = collection(db, "classes");
    onSnapshot(classesRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        classes.push({
          id: change.doc.id,
          ...(change.doc.data() as {
            likes: number;
            name: string;
            status: string;
            title: string;
            user: string;
            video: string;
            views: number;
          }),
        });
      });
      resolve(classes);
    });
  });

  const lessons = await fetchClasses;

  server.emit("start-class", id);
  server.emit("connected", lessons);

  return redirect(`/canvas/${id}`);
}

export async function joinClassAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const id = formData.get("id");

  console.log(id);

  server.emit("join-class", { id, user: authProvider.user });

  // let joinedUser = {};

  // server.on("failed-join", (data) => {
  //   const { success } = data;
  //   console.log(success);
  //   globalStatus = success;
  // });

  // server.on("joined-successfully", (data) => {
  //   const { success } = data;
  //   console.log(success);
  //   globalStatus = success;
  // });

  const joinPromise = new Promise((resolve) => {
    // setTimeout(() => {
    server.on("failed-join", (data) => {
      const { success } = data;
      console.log(success);
      resolve(success);
    });

    server.on("joined-successfully", (data) => {
      const { success } = data;
      console.log(success);
      resolve(success);
    });
    // }, 500);
    // resolve(globalStatus as boolean);
  });

  // const joinedSuccessfullyPromise = new Promise((resolve) => {
  //   setTimeout(() => {
  //     server.on("join-successfully", (data) => {
  //       resolve(data.success);
  //     });
  //   }, 500);
  // });

  const successStatus = await joinPromise;
  // const joinedStatus = await joinedSuccessfullyPromise;

  console.log(successStatus);

  if (!successStatus) {
    toast.error("Class have not start yet");
    return redirect("/dashboard");
  }

  if (successStatus) {
    // toast.success(`${joinedUser.displayName} joined the class`);
    return redirect(`/canvas/${id}`);
  }

  // console.log(globalStatus);

  // if (joinedStatus) {
  //   return redirect(`/canvas/${id}`);
  // }

  // server.emit("user-joined", { id, host: false });

  // const inActiveClass = await new Promise((resolve) => {
  //   const timeout = setTimeout(() => {
  //     clearTimeout(timeout);
  //     resolve(false);
  //     console.log("Timeout waiting for inactive-class event");
  //   }, 1000);

  //   server.on("inactive-class", (data) => {
  //     clearTimeout(timeout);
  //     resolve(data.success);
  //     console.log("inactive", data.success);
  //   });
  // });

  // if (inActiveClass) {
  //   toast.error("No active class");
  //   return redirect(`${new URL(request.url).origin}/dashboard`);
  // } else {
  //   return redirect(`/canvas/${id}`);
  // }
  // return null;
}

export async function canvasAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const id = formData.get("id");
  const text = formData.get("text");
  server.emit("text", text);

  console.log(id);
  return redirect(`/canvas/${id}`);
}
