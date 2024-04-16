import { ChangeEvent, KeyboardEvent, FocusEvent, useMemo } from "react";

interface Props {
  otp: string;
  otpLength: number;
  onChange: (value: string) => void;
}

const DIGITS = new RegExp(/^\d+$/);

export default function OTPInputs({ otp, otpLength, onChange }: Props) {
  const otpInputsField = useMemo(() => {
    const otpInputsArray = otp.split("");
    const otpInputsField: Array<string> = [];

    for (let i = 0; i < otpLength; i++) {
      const char = otpInputsArray[i];

      if (DIGITS.test(char)) {
        otpInputsField.push(char);
      } else {
        otpInputsField.push("");
      }
    }

    return otpInputsField;
  }, [otp, otpLength]);

  function focusToNextInput(target: HTMLElement) {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  }

  function focusToPrevInput(target: HTMLElement) {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  }

  function inputOnChange(e: ChangeEvent<HTMLInputElement>, id: number) {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = DIGITS.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }
    const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";
    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newOtp = otp.substring(0, id) + targetValue + otp.substring(id + 1);
      onChange(newOtp);
      if (!isTargetValueDigit) {
        return;
      }
      focusToNextInput(target);
    } else if (targetValueLength === otpLength) {
      onChange(targetValue);

      target.blur();
    }
  }

  function inputOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    focusToPrevInput(target);
  }

  function inputOnFocus(e: FocusEvent<HTMLInputElement>) {
    const { target } = e;

    const prevInputEl =
      target.previousElementSibling as HTMLInputElement | null;

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus();
    }

    target.setSelectionRange(0, target.value.length);
  }

  return (
    <>
      {otpInputsField.map((input, id) => (
        <input
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          name={id.toString()}
          pattern="\d{1}"
          value={input}
          onChange={(e) => inputOnChange(e, id)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
          key={id}
          required
          maxLength={otpLength}
          className="w-12 rounded-lg border-neutral-200 bg-white text-center text-lg font-extrabold shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      ))}
    </>
  );
}
