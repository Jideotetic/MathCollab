export default function GlobalSpinner() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="inline-block h-20  w-20 animate-spin after:m-2 after:block after:h-[64px] after:w-[64px] after:rounded-full after:border-8 after:border-b-4 after:border-l-0 after:border-r-0 after:border-t-4 after:border-[#FD632F] after:content-['']"></div>
      </div>
    </>
  );
}
