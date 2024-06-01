import { redirect, ActionFunctionArgs } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { server } from "../socket";

type collaboratorsList = string[] | string;

export default async function createClassAction({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();

  const className = formData.get("Class name");
  const collaborators = formData.get("collaborators") as string;
  let collaboratorsList: collaboratorsList = [];

  if (collaborators?.includes(",")) {
    collaboratorsList = collaborators.split(",");
    collaboratorsList = [...collaboratorsList];
  } else if (collaborators === "") {
    // do nothing
  } else {
    collaboratorsList = [collaborators];
  }

  const startClassDate = new Date(formData.get("Class start date") as string);
  const currentDate = new Date();

  if (currentDate > startClassDate) {
    return toast.error("Choose a future date");
  }

  const user = authProvider.user;
  const classesRef = collection(db, "classes");
  const docRef = await addDoc(classesRef, {
    collaborators: collaboratorsList,
    classTitle: className,
    creatorImage: user?.photoURL,
    creatorName: user?.displayName,
    likes: [],
    startClassDate: startClassDate,
    status: "upcoming",
    video: "",
    views: 0,
  });

  const classId = docRef.id;
  const formatDate = `${startClassDate.getDate()}/${startClassDate.getDay()}/${startClassDate.getFullYear()} at ${startClassDate.getHours()}:${startClassDate.getMinutes()}`;

  const message = { classId, className, formatDate };

  function sendMail() {
    const templateParams = {
      to_email: collaboratorsList,
      to_name: "Collaborators",
      from_name: user!.displayName,
      message: message,
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

  if (collaboratorsList.length > 0) {
    sendMail();
  } else {
    // do nothing
  }

  server.emit("class-created");

  return redirect(`/dashboard`);
}
