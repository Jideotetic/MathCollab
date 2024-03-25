import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation, useRouteLoaderData } from "react-router-dom";
import HomePageHeader from "../components/HomePageHeader";
import HomePageMain from "../components/HomePageMain";
import HomePageFooter from "../components/HomePageFooter";
import { User } from "firebase/auth";
import GlobalSlider from "../components/GlobalSlider";
// import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { server } from "../socket";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  const { currentUser } = useRouteLoaderData("root") as { currentUser: User };

  console.log(currentUser);

  const navigation = useNavigation();

  // const { verifyEmailFormOpen } = useContext(FormsContext) as FormsContextType;

  // useEffect(() => {
  //   if (currentUser && !verifyEmailFormOpen) {
  //     deleteUser(currentUser);
  //   }
  // }, []);

  // useEffect(() => {
  //   server.on("connected-successfully", (data) => {
  //     const { success } = data;
  //     console.log(success);
  //     if (success) {
  //       toast.success("Connected successfully");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   server.on("login-successfully", (data) => {
  //     const { success } = data;
  //     console.log(success);
  //     if (success) {
  //       toast.success("Login successfully");
  //     }
  //   });
  // }, []);

  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <ToastContainer />
      <HomePageHeader />

      <HomePageMain />
      <button onClick={() => server.emit("login")}>Click me</button>

      <HomePageFooter />

      {/* AUTHENTICATION SCREENS */}
      <Outlet />
    </>
  );
}
