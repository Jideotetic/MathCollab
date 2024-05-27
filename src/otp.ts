interface Temp {
  email: string;
  otpValue: string;
}

export const temp: Temp = {
  email: "",
  otpValue: Math.floor(Math.random() * 10000)
    .toFixed()
    .padEnd(4, "0"),
};
