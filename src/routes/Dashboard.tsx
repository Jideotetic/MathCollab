import { Outlet, useNavigation } from "react-router-dom";
import DashboardMain from "../components/dashboard/DashboardMain";
import { ToastContainer } from "react-toastify";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import GlobalSlider from "../components/GlobalSlider";
import DashboardNav from "../components/dashboard/DashboardNav";

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <ToastContainer />

      <DashboardHeader />

      <div className="mx-auto w-[1280px] max-w-full border border-transparent px-4 pb-4">
        <DashboardNav />
        <main className="mt-[110px] min-h-screen rounded-[10px] border border-[#E0E0E0] lg:ml-[218px]">
          <DashboardMain />
          <Outlet />
        </main>
      </div>
    </>
  );
}
