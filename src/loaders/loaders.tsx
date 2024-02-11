import { classes } from "../data/classes";
import { LoaderFunction } from "react-router-dom";

interface LoaderRequest {
  url: string;
}

export async function classesLoader({ request }: { request: LoaderRequest }) {
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
