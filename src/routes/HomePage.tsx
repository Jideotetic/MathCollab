import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation, useRouteLoaderData } from "react-router-dom";
import HomePageHeader from "../components/HomePageHeader";
import HomePageMain from "../components/HomePageMain";
import HomePageFooter from "../components/HomePageFooter";
import { User, deleteUser } from "firebase/auth";
import GlobalSlider from "../components/GlobalSlider";
import { useEffect, useContext } from "react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";

export default function HomePage() {
  const { currentUser } = useRouteLoaderData("root") as { currentUser: User };

  const navigation = useNavigation();

  const { verifyEmailFormOpen } = useContext(FormsContext) as FormsContextType;

  useEffect(() => {
    if (currentUser && !verifyEmailFormOpen) {
      deleteUser(currentUser);
    }
  }, []);

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
