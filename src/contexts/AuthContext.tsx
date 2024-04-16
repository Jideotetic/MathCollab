import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (loading) {
        console.log(currentUser);
      } else {
        console.log(currentUser);
      }
    });

    return () => unsubscribe();
  }, [currentUser, loading]);

  return <div>{children}</div>;
}
