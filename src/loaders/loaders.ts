import { classes } from "../data/classes";
import { LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export interface LessonData {
  id: string;
  likes: number;
  name: string;
  status: string;
  title: string;
  user: string;
  video: string;
  views: number;
}

export async function homePageLoader() {
  try {
    const lesson: LessonData[] = [];
    await authProvider.checkAuth();
    const classesRef = collection(db, "classes");
    const querySnapshot = await getDocs(classesRef);
    querySnapshot.docs.forEach((doc) => {
      lesson.push({
        id: doc.id,
        ...(doc.data() as {
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

    const lessons = classes;
    if (authProvider.user) {
      return redirect("/dashboard");
    }
    return {
      user: authProvider.user,
      lessons,
      lesson,
    };
  } catch (error) {
    console.error(error);
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
