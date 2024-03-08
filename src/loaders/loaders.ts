import { classes } from "../data/classes";
import { LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
// import { server } from "../contexts/socket";
// import { toast } from "react-toastify";

export async function homePageLoader() {
  try {
    await authProvider.checkAuth();
    const lessons = classes;
    if (authProvider.user) {
      return redirect("/dashboard");
    }
    return {
      user: authProvider.user,
      lessons,
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

export async function canvasLoader() {
  try {
    await authProvider.checkAuth();
    return {
      user: authProvider.user,
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
