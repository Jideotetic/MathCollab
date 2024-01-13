import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage;
  let errorCode;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorCode = error.status;
    }
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div className="flex h-screen flex-col justify-center gap-4 text-center">
      <p className="text-clamp3">{errorCode}</p>
      <p>{errorMessage}</p>
      <p>
        <Link to="/" className="underline hover:no-underline">
          Go Home
        </Link>
      </p>
    </div>
  );
}