import { useContext } from "react";
import MathCollab from "./MathCollab";
import { InputsContext, InputsContextType } from "../contexts/InputsContext";

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
  const { email } = useContext(InputsContext) as InputsContextType;

  return (
    <div className="flex w-[359px] max-w-full flex-col items-center justify-center text-center">
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
