import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import { authProvider } from "../auth";
// import { useRouteLoaderData } from "react-router-dom";

// export const AuthContext = createContext<User | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  // const { user } = useRouteLoaderData("dashboard") as {
  //   user: User | null;
  // };
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (loading) {
        console.log(currentUser);
      } else {
        console.log(currentUser);
        // !currentUser && navigate("/");
      }
    });

    return () => unsubscribe();
  }, [currentUser, loading]);

  return <div>{children}</div>;
}
