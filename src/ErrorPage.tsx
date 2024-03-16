import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useNavigation,
} from "react-router-dom";
import GlobalSlider from "./components/GlobalSlider";

export default function ErrorPage() {
  const error = useRouteError();
  const navigation = useNavigation();
  let errorMessage;
  let errorCode;

  if (isRouteErrorResponse(error)) {
    errorCode = error.status;
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <div className="flex h-screen flex-col justify-center gap-4 text-center">
        <p className="text-clamp1 font-bold">{errorCode}</p>
        <p>{errorMessage}</p>
        <p>
          <Link to="/" className="underline hover:no-underline">
            Go Home
          </Link>
        </p>
      </div>
    </>
  );
}
