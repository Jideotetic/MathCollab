import { useContext } from "react";
import MathCollab from "./MathCollab";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "firebase/auth";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { InputsContext, InputsContextType } from "../contexts/InputsContext";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

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
  const { verifyPasswordResetOTPFormOpen } = useContext(
    FormsContext,
  ) as FormsContextType;

  const { email } = useContext(InputsContext) as InputsContextType;

  const currentUser = useContext(AuthContext) as User;

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
            {headerContent.email && verifyPasswordResetOTPFormOpen ? (
              <span className="font-semibold">{email}</span>
            ) : (
              <span className="font-semibold">{currentUser?.email}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
