import MathCollab from "./MathCollab";
import { useRouteLoaderData } from "react-router-dom";

interface HeaderContentProps {
  title: string;
  description: string;
  email: string;
}

export default function FormHeader({
  headerContent,
}: {
  headerContent: HeaderContentProps;
}) {
  const { email } = useRouteLoaderData("root") as { email: string };

  return (
    <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
      <MathCollab />

      <div className="space-y-2">
        {headerContent.title && (
          <h2 className="text-xl font-semibold leading-[30px]">
            {headerContent.title}
          </h2>
        )}

        {headerContent.description && (
          <p className="text-base font-normal leading-normal">
            {headerContent.description} <br />
            {headerContent.email && (
              <span className="font-semibold">{email}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
