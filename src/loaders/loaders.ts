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
    console.log(error);
  }
}

export async function canvasLoader() {
  console.log("Canvas loader");

  try {
    await authProvider.checkAuth();
    const classes: ClassData[] = [];
    let texts: string[] = [];
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

    const fetchInitialTexts = new Promise((resolve) => {
      server.on("initial-text", (globalTexts) => {
        texts = globalTexts;
        console.log(texts);
        resolve(texts);
      });
    });

    // const fetchTexts = new Promise((resolve) => {
    //   server.on("text", (globalTexts) => {
    //     texts = globalTexts;
    //     console.log(texts);
    //     resolve(texts);
    //   });
    // });

    const initialTexts = (await fetchInitialTexts) as string[];
    // if (initialLoad) {
    //   initialLoad = false;
    // } else {
    //   globalTexts = (await fetchTexts) as string[];
    // }

    return {
      currentUser: authProvider.user,
      lessons,
      initialTexts,
    };
  } catch (error) {
    console.error(error);
  }
}
