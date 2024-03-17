import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation, useRouteLoaderData } from "react-router-dom";
import HomePageHeader from "../components/HomePageHeader";
import HomePageMain from "../components/HomePageMain";
import HomePageFooter from "../components/HomePageFooter";
import { User, deleteUser } from "firebase/auth";
import GlobalSlider from "../components/GlobalSlider";
import { useEffect } from "react";

export default function HomePage() {
  const { currentUser } = useRouteLoaderData("root") as { currentUser: User };
  const navigation = useNavigation();

  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      deleteUser(currentUser);
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
