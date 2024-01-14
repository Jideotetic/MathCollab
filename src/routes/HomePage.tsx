export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-3xl flex-col items-center justify-center text-center">
      <h2 className="text-clamp3 font-extrabold">
        Welcome to{" "}
        <span className="font-lemons">
          Math<span className="text-lime-600">Collab</span>
        </span>
      </h2>
      <p>
        An interactive math editing and collaboration platform that enables
        real-time collaborative learning of math and other applied math courses.
      </p>
    </div>
  );
}
