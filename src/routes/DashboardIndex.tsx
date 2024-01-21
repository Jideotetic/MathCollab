import homeUrl from "../assets/home.svg";
import notificationUrl from "../assets/notification.svg";
import userImageUrl from "../assets/user-image.png";
import arrowRightIconUrl from "../assets/Icon.svg";

export default function DashboardIndex() {
  return (
    <>
      <div className="flex h-[69px] items-center justify-between border-2 border-neutral-200 px-4">
        <div className="flex gap-2 py-1.5">
          <img src={homeUrl} alt="" />
          <span className="text-base font-normal leading-normal text-neutral-500">
            Dashboard
          </span>
        </div>
        <div className="flex gap-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
            <img src={notificationUrl} alt="" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-4">
              <div className="text-sm leading-[21px]">
                <div className=" font-semibold text-slate-950">Maleek A.</div>
                <div className="font-normal text-neutral-500">Free Account</div>
              </div>
              <img
                src={userImageUrl}
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </div>
            <img src={arrowRightIconUrl} alt="" />
          </div>
        </div>
      </div>
      <div className="flex h-16 items-center border-2 border-neutral-200 px-4">
        Content
      </div>
      <div className="flex flex-grow items-center justify-center border-2 border-neutral-200">
        Content
      </div>
    </>
  );
}
