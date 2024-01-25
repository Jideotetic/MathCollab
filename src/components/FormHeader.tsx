import MathCollab from "./MathCollab";
import { InputValueContextTypes } from "../@types/inputValueContextTypes";
import { InputValueContext } from "../contexts/InputValueContext";
import { useContext } from "react";

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
  const { email } = useContext(InputValueContext) as InputValueContextTypes;
  return (
    <div className="flex max-w-[359px] flex-col items-center justify-center text-center">
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
