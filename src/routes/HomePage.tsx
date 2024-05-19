import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation } from "react-router-dom";
import HomePageHeader from "../components/homepage/HomePageHeader";
import HomePageMain from "../components/homepage/HomePageMain";
import HomePageFooter from "../components/homepage/HomePageFooter";
import GlobalSlider from "../components/GlobalSlider";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  const navigation = useNavigation();

  console.log("classes");
  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <ToastContainer />

      <HomePageHeader />

      <HomePageMain />

      <HomePageFooter />

      {/* AUTHENTICATION SCREENS */}
      <Outlet />
    </>
  );
}
