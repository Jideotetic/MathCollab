import { ReactNode, createContext, useState } from "react";

export interface OtpContextType {
  otpValue: string;
}

export const OtpContext = createContext<OtpContextType | null>(null);

export default function OtpContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [otpValue] = useState(
    Math.floor(Math.random() * 10000)
      .toFixed()
      .padEnd(4, "0"),
  );

  return (
    <>
      <OtpContext.Provider value={{ otpValue }}>{children}</OtpContext.Provider>
    </>
  );
}
