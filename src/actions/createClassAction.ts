import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default async function createClassAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();
  console.log(formData);

  const className = formData.get("Class name");
  const collaborators = formData.get("collaborators");
  // const collaborators = formData.get("collaborators");
  const user = authProvider.user;

  console.log(className, JSON.stringify(collaborators as string).split(","));

  function sendMail() {
    const templateParams = {
      to_email: collaborators,
      to_name: "Collaborators",
      from_name: user!.displayName,
      message: className,
    };

    emailjs
      .send(
        "service_gmfhpbo",
        "template_7rubmud",
        templateParams,
        "ATX_F8kDIENLslJVM",
      )
      .then(() => {
        return toast.success("Email sent successfully!");
      })
      .catch(() => {
        return toast.error("Error sending email contact administrator");
      });
  }

  sendMail();

  const classesRef = collection(db, "classes");
  await addDoc(classesRef, {
    likes: 0,
    name: user?.displayName,
    status: "upcoming",
    title: className,
    user: user?.photoURL,
    video: "",
    views: 0,
    likedBy: [],
  });

  console.log("upcoming");

  return redirect(`/dashboard`);
}
