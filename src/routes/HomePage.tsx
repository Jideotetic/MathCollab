import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation, useRouteLoaderData } from "react-router-dom";
import HomePageHeader from "../components/HomePageHeader";
import HomePageMain from "../components/HomePageMain";
import HomePageFooter from "../components/HomePageFooter";
import { User, signOut } from "firebase/auth";
import GlobalSlider from "../components/GlobalSlider";
import { useEffect } from "react";
import { auth } from "../firebase";

export default function HomePage() {
  const { currentUser } = useRouteLoaderData("root") as { currentUser: User };
  const navigation = useNavigation();

  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      signOut(auth);
    }
  }, [currentUser]);
  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <HomePageHeader />

      <HomePageMain />

      <HomePageFooter />

      {/* AUTHENTICATION SCREENS */}
      <Outlet />
    </>
  );
}
