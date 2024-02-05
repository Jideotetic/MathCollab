import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import ellipsisIconUrl from "../assets/Ellipse.svg";
import listDashboardUrl from "../assets/List_dashboard.png";
import testimonialImageUrl from "../assets/Ellipse 1.png";
import quoteUrl from "../assets/“.svg";
import filledStarUrl from "../assets/star.svg";
import emptyStarUrl from "../assets/star (1).svg";
import { useContext } from "react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { Link } from "react-router-dom";

export default function HomePageIndex() {
  const { setSignUpFormOpen } = useContext(FormsContext) as FormsContextType;

  return (
    <main className="mx-auto w-[1280px] max-w-full px-4 text-center">
      <div className="bg-image bg-cover bg-top bg-no-repeat pt-12">
        <div className="mx-auto mb-[48px] w-[1068px] max-w-full gap-[48px]">
          <div
            id="hero"
            className="mx-auto flex w-[838px] max-w-full flex-col gap-8"
          >
            <div className="mx-auto w-[291px] max-w-full rounded-3xl border border-neutral-200 bg-white">
              <div className="mx-auto flex w-[251px] max-w-full items-center justify-between">
                <img src={ellipsisIconUrl} className="h-[6px] w-[6px]" alt="" />
                <h2 className="text-base font-bold leading-normal text-orange-500">
                  WELCOME TO MATHCOLLAB
                </h2>
                <img src={ellipsisIconUrl} className="h-[6px] w-[6px]" alt="" />
              </div>
            </div>

            <div className="mx-auto flex w-[802px] max-w-full flex-col gap-[48px]">
              <div className="flex flex-col items-center gap-[18px]">
                <h3 className="text-clamp1 font-bold leading-snug text-slate-950 sm:text-clamp2 sm:leading-[64px]">
                  We Make Math Editing and{" "}
                  <span className="text-orange-500">Collaboration</span> Easier
                </h3>
                <p className="mx-auto w-[689px] max-w-full text-lg font-normal leading-[27px] text-neutral-700">
                  MathCollab is a real-time interactive math editing and
                  collaboration platform that enables realt-time collaborative
                  learning of math and other applied math courses.
                </p>
              </div>
              <div className="mx-auto flex w-[375px] max-w-full flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <button
                  onClick={() => setSignUpFormOpen(true)}
                  type="button"
                  className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
                >
                  Get Started
                </button>
                <Link
                  to="explore"
                  className="w-[175px] rounded-lg border border-slate-950 bg-white py-[13px] text-sm font-semibold leading-tight text-slate-950 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                >
                  Preview the classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-[72px] w-[1068px] max-w-full">
        <img src={listDashboardUrl} className="max-w-full" alt="" />
      </div>

      <div className="mx-auto mb-[72px] flex w-[1068px] max-w-full flex-col gap-[48px] lg:flex-row lg:justify-between lg:gap-0">
        <img
          src={listDashboardUrl}
          className="h-auto w-[450px] max-w-full"
          alt=""
        />
        <div className="flex w-[550px] max-w-full flex-col gap-[48px]">
          <div className="flex flex-col gap-[10px] text-left">
            <h3 className="text-clamp1 font-bold leading-snug text-slate-950 sm:leading-[64px]">
              Join Top Collaborative Classes
            </h3>
            <p className="w-[689px] max-w-full text-lg font-normal leading-[27px] text-neutral-700">
              Welcome to the ultimate destination for where math collaboration
              us made easier for learners
            </p>
          </div>
          <button
            onClick={() => setSignUpFormOpen(true)}
            type="button"
            className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="mx-auto mb-[72px] flex w-[1068px] max-w-full flex-col gap-[48px] lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex w-[550px] max-w-full flex-col gap-[48px]">
          <div className="flex flex-col gap-[10px] text-left">
            <h3 className="text-clamp1 font-bold leading-snug text-slate-950 sm:leading-[64px]">
              Create and Invite people to your class
            </h3>
            <p className="w-[515px] max-w-full text-lg font-normal leading-[27px] text-neutral-700">
              With mathCollab, you can create a class and invite collaborators
              to join.
            </p>
          </div>
          <button
            onClick={() => setSignUpFormOpen(true)}
            type="button"
            className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
          >
            Get Started
          </button>
        </div>
        <img
          src={listDashboardUrl}
          className="h-auto w-[450px] max-w-full"
          alt=""
        />
      </div>

      <div className="mx-auto mb-[72px] flex w-[1068px] max-w-full flex-col gap-[48px] lg:flex-row lg:justify-between lg:gap-0">
        <img
          src={listDashboardUrl}
          className="h-auto w-[450px] max-w-full"
          alt=""
        />
        <div className="flex w-[550px] max-w-full flex-col gap-[48px]">
          <div className="flex flex-col gap-[10px] text-left">
            <h3 className="text-clamp1 font-bold leading-snug text-slate-950 sm:leading-[64px]">
              Collaborative with people to solve math problems.
            </h3>
            <p className="w-[515px] max-w-full text-lg font-normal leading-[27px] text-neutral-700">
              With mathCollab, you can create a class and invite collaborators
              to join.
            </p>
          </div>
          <button
            onClick={() => setSignUpFormOpen(true)}
            type="button"
            className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="mx-auto mb-[72px] flex w-[1068px] max-w-full flex-col gap-[48px] border-2 border-red-400 lg:flex-row lg:justify-between lg:gap-0"></div>

      <div className="mb-[72px] flex flex-col items-center gap-[48px]">
        <h3 className="mx-auto w-[802px] max-w-full text-clamp1 font-bold leading-snug text-slate-950 sm:text-clamp2 sm:leading-[64px]">
          What People Say About Math<span className="text-orange-500">C</span>
          ollab
        </h3>

        <div className="mx-auto flex w-[1054px] max-w-full flex-col items-center gap-[48px] lg:flex-row lg:justify-between lg:gap-0">
          <div className="w-[421px] max-w-full">
            <img src={testimonialImageUrl} alt="" />
          </div>
          <div className="flex w-[568px] max-w-full flex-col gap-[32px]">
            <div className="flex flex-col gap-[32px]">
              <div className="flex justify-between">
                <img src={quoteUrl} alt="" />
                <div className="flex">
                  <img src={filledStarUrl} alt="" />
                  <img src={filledStarUrl} alt="" />
                  <img src={filledStarUrl} alt="" />
                  <img src={filledStarUrl} alt="" />
                  <img src={emptyStarUrl} alt="" />
                </div>
              </div>
              <p className="text-left text-lg font-normal leading-[27px] text-neutral-700">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem.
                fered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem.
              </p>
            </div>

            <div className="flex gap-[26.49px]">
              <button type="button">
                <ArrowLongLeftIcon className="w-[40.75px] rounded-[89.66px] bg-stone-300 text-white" />
              </button>
              <button type="button">
                <ArrowLongRightIcon className="w-[40.75px] rounded-[89.66px] bg-black text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[72px] flex flex-col items-center gap-[48px]">
        <div className="flex w-full flex-col items-center justify-center gap-[28px]">
          <h3 className="mx-auto w-[802px] max-w-full text-clamp1 font-bold leading-snug text-slate-950 sm:text-clamp2 sm:leading-[64px]">
            All Your Math Collaboration tools in one place
          </h3>
          <p className="w-[515px] max-w-full text-center text-lg font-normal leading-[27px] text-neutral-700">
            MathCollab, a real-time interactive math collaboration app, can help
            you bring your success dream to life.
          </p>
        </div>

        <button
          onClick={() => setSignUpFormOpen(true)}
          type="button"
          className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
        >
          Get Started Now
        </button>
      </div>
    </main>
  );
}
