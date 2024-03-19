import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
// import { server } from "../socket";
// import { toast } from "react-toastify";

export interface ClassData {
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
    await authProvider.checkAuth();
    const classes: ClassData[] = [];
    const classesRef = collection(db, "classes");
    const snapshot = await getDocs(classesRef);
    snapshot.forEach((doc) => {
      classes.push({
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

    if (localStorage.getItem("user")) {
      return redirect("/dashboard");
    }

    return {
      currentUser: authProvider.user,
      classes,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search")?.toLocaleLowerCase() || "";

  try {
    await authProvider.checkAuth();
    console.log(authProvider.user?.displayName);
    const classes: ClassData[] = [];
    const classesRef = collection(db, "classes");
    const snapshot = await getDocs(classesRef);
    snapshot.forEach((docs) => {
      if (
        docs.data().status === "ongoing" &&
        docs.data().name === authProvider.user?.displayName
      ) {
        const docRef = doc(db, `classes/${docs.id}`);
        updateDoc(docRef, {
          status: "created",
        });
      }
      classes.push({
        id: docs.id,
        ...(docs.data() as {
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

    let filteredClasses = classes.filter((lesson) => {
      return lesson.title.toLocaleLowerCase().includes(search!);
    });

    if (!search) {
      filteredClasses = classes;
    }
    if (!authProvider.user) {
      return redirect("/");
    }
    return {
      currentUser: authProvider.user,
      filteredClasses,
      search,
    };
  } catch (error) {
    console.error(error);
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

// export const classLoader: LoaderFunction<unknown> = async ({ params }) => {
//   const lessonTitle = params.class;
//   const lessons = classes.filter((lesson) => {
//     return lesson.link === lessonTitle;
//   });

//   const lesson = classes.find((lesson) => {
//     return lesson.link === lessonTitle;
//   });

//   return { lesson, lessons };
// };
