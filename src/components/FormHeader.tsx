interface HeaderContentProps {
  firstHeaderText: string;
  styledText: string;
  lastHeaderText: string;
  secondHeading: string;
  paragraph: string;
  email: string;
}

export default function FormHeader({
  headerContent,
}: {
  headerContent: HeaderContentProps;
}) {
  return (
    <div className="flex w-full max-w-[359px] flex-col items-center justify-center text-center">
      {headerContent.firstHeaderText && (
        <h1 className="text-[28px] font-bold leading-loose">
          {headerContent.firstHeaderText}
          <span className="text-orange-500">{headerContent.styledText}</span>
          {headerContent.lastHeaderText}
        </h1>
      )}

      <div className="space-y-2">
        {headerContent.secondHeading && (
          <h2 className="text-xl font-semibold leading-[30px]">
            {headerContent.secondHeading}
          </h2>
        )}
        {headerContent.paragraph && (
          <p className="text-base font-normal leading-normal">
            {headerContent.paragraph}{" "}
            <span className="font-semibold">{headerContent.email}</span>
          </p>
        )}
      </div>
    </div>
  );
}
