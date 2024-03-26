import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { server } from "../socket";
import { toast } from "react-toastify";

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

    server.emit("connected", lessons);

    return {
      currentUser: authProvider.user,
      lessons,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  console.log("Dashboard loader");
  const url = new URL(request.url);
  const search = url.searchParams.get("search")?.toLocaleLowerCase() || "";

  try {
    await authProvider.checkAuth();
    if (!authProvider.user) {
      return redirect("/");
    }
    localStorage.setItem("user", JSON.stringify(authProvider.user));
    const classes: ClassData[] = [];
    const fetchClasses = new Promise((resolve) => {
      const classesRef = collection(db, "classes");
      onSnapshot(classesRef, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          // console.log(change);
          // if (change.type === "modified") {
          //   console.log("modified");
          // }
          // if (
          //   change.type === "modified" &&
          //   change.doc.data().name === authProvider.user?.displayName
          // ) {
          //   const docRef = doc(db, `classes/${change.doc.id}`);
          //   updateDoc(docRef, {
          //     status: "created",
          //   });
          // }
          // if (
          //   change.doc.data().name === authProvider.user?.displayName &&
          //   change.doc.data().status === "ongoing"
          // ) {
          //   const docRef = doc(db, `classes/${change.doc.id}`);
          //   updateDoc(docRef, {
          //     status: "created",
          //   });
          // }
          // if (
          //   url.pathname.includes("dashboard") &&
          //   change.doc.data().status === "ongoing" &&
          //   change.doc.data().name === authProvider.user?.displayName
          // ) {
          //   console.log("dashboard");
          //   const docRef = doc(db, `classes/${change.doc.id}`);
          //   updateDoc(docRef, {
          //     status: "created",
          //   });
          // }
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

    const lessons = (await fetchClasses) as ClassData[];

    server.emit("connected", lessons);

    let filteredClasses = lessons.filter((lesson) => {
      return lesson.title.toLocaleLowerCase().includes(search!);
    });

    if (!search) {
      filteredClasses = classes;
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
  console.log("Canvas loader");

  try {
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

    server.emit("connected", lessons);

    server.on("class-started", (data) => {
      const { success } = data;
      console.log(success);
      if (success) {
        toast.success("Class started successfully");
      }
    });

    server.on("joined", (data) => {
      const { user } = data;
      toast.success(`${user.displayName} joined the class`);
    });

    return {
      currentUser: authProvider.user,
      lessons,
    };
  } catch (error) {
    console.error(error);
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
