import { classes } from "../data/classes";
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { toast } from "react-toastify";
// import emailjs from "emailjs-com";
// import { temp } from "../otp";

export async function classesLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  let lessons = classes.filter((lesson) => {
    return lesson.link.includes(search!);
  });
  if (!search) {
    lessons = classes;

    return { lessons, search };
  } else {
    return { lessons, search };
  }
}

export const classLoader: LoaderFunction<unknown> = async ({ params }) => {
  const lessonTitle = params.class;
  const lessons = classes.filter((lesson) => {
    return lesson.link === lessonTitle;
  });

  const lesson = classes.find((lesson) => {
    return lesson.link === lessonTitle;
  });

  return { lesson, lessons };
};
