import { classes } from "../data/classes";
import { LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { server } from "../contexts/socket";

export async function homePageLoader() {
  try {
    await authProvider.checkAuth();
    return {
      user: authProvider.user,
    };
  } catch (error) {
    // handle error
  }
}

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");

  let lessons = classes.filter((lesson) => {
    return lesson.link.includes(search!);
  });

  if (!search) {
    lessons = classes;
  }

  try {
    await authProvider.checkAuth();
    if (!authProvider.user) {
      return redirect("/");
    }
    return {
      user: authProvider.user,
      lessons,
      search,
    };
  } catch (error) {
    // handle error
  }
}

export async function canvasLoader({ request }: LoaderFunctionArgs) {
  let url = new URL(request.url).pathname;
  const tempUrl = url.split("/");
  url = tempUrl[tempUrl.length - 1];
  let className1 = "Default";

  server.on("class-name", (className) => {
    if (className !== url) {
      return redirect(`${new URL(request.url).origin}/dashboard`);
    }
    className1 = className;
  });

  try {
    await authProvider.checkAuth();
    return {
      user: authProvider.user,
      url,
      className1,
    };
  } catch (error) {
    // handle error
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
