import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
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
  console.log("Hompeage loader");
  try {
    if (localStorage.getItem("user")) {
      return redirect("/dashboard");
    }
    await authProvider.checkAuth();
    const classes: ClassData[] = [];
    const fetchClasses = new Promise((resolve) => {
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

    return {
      currentUser: authProvider.user,
      lessons,
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
    localStorage.setItem("user", JSON.stringify(authProvider.user));
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
