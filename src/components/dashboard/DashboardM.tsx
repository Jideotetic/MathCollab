import { Unsubscribe } from "firebase/firestore";
import { ClassData } from "../../@types/types";
import { useFetcher, useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardM() {
  //   const { filteredClasses, cleanup } = useRouteLoaderData("dashboard") as {
  //     filteredClasses: ClassData[];
  //     search: string;
  //     cleanup: Unsubscribe;
  //   };

  const fetcher = useFetcher();

  //   console.log("filteredClasses");

  useEffect(() => {
    console.log("filteredClasses------");
  }, []);

  //   useEffect(() => {
  //     return cleanup;
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-neutral-200 px-4 py-2">
        <div className="flex-grow"></div>
      </div>
    </>
  );
}
