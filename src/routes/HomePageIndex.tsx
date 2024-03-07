import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import ellipsisIconUrl from "../assets/Ellipse.svg";
import testimonialImageUrl from "../assets/Mask group.png";
import quoteUrl from "../assets/“.svg";
import filledStarUrl from "../assets/star.svg";
import emptyStarUrl from "../assets/star (1).svg";
import joinUrl from "../assets/Join.png";
import createUrl from "../assets/Create.png";
import canvasUrl from "../assets/Canvas.png";
import thorusUrl from "../assets/Thorus 2.svg";
import groupUrl from "../assets/Group 48096042.svg";
import iconUrl from "../assets/1_3.svg";
import boxUrl from "../assets/Box1.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";

export default function HomePageIndex() {
  const { setSignUpFormOpen } = useContext(FormsContext) as FormsContextType;

  return (
    <main className="mx-auto w-[1280px] max-w-full pt-[101px] text-center">
      <div className="mb-[48px] bg-white/30 bg-image bg-cover bg-top bg-no-repeat pt-[33px]">
        <div className="mx-auto w-[1068px] max-w-full space-y-[48px] px-4">
          <div className="mx-auto w-[838px] max-w-full space-y-[32px]">
            <div className="mx-auto w-[291px] max-w-full rounded-3xl border border-neutral-200 bg-white">
              <div className="flex items-center justify-evenly">
                <img src={ellipsisIconUrl} className="h-[6px] w-[6px]" alt="" />

                <h2 className="text-base font-bold leading-normal text-orange-500">
                  WELCOME TO MATHCOLLAB
                </h2>

                <img src={ellipsisIconUrl} className="h-[6px] w-[6px]" alt="" />
              </div>
            </div>

            <div className="mx-auto w-[802px] max-w-full space-y-[48px]">
              <div className="space-y-[18px]">
                <h3 className="text-clamp1 font-bold text-slate-950">
                  We Make Math Editing and{" "}
                  <span className="text-orange-500">Collaboration</span> Easier
                </h3>

                <p className="mx-auto w-[689px] max-w-full text-lg font-normal text-neutral-700">
                  MathCollab is a real-time interactive math editing and
                  collaboration platform that enables realt-time collaborative
                  learning of math and other applied math courses.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-[48px]">
            <Link
              to="/signup"
              onClick={() => setSignUpFormOpen(true)}
              type="button"
              className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
            >
              Get Started
            </Link>

            <img
              src={boxUrl}
              alt=""
              className="mx-auto w-[100%] sm:w-[80%] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="mb-[48px]">
        <h3 className="text-clamp1 font-bold text-slate-950">
          What We <span className="text-orange-500">Offer</span>
        </h3>
      </div>

      <div className="relative mb-[107px] rounded-[50px] px-4 py-[107px] shadow-customInner shadow-[#00AAF81A]">
        <img
          src={thorusUrl}
          alt=""
          className="absolute right-3 top-10 lg:right-20"
        />

        <img
          src={groupUrl}
          alt=""
          className="absolute bottom-16 left-3 lg:left-20 "
        />

        <div className="mx-auto flex w-[1120px] max-w-full flex-col items-center gap-12 md:flex-row lg:items-start">
          <img src={joinUrl} className="max-w-full md:w-[50%] " alt="" />

          <div className="flex w-[503px] max-w-full flex-col gap-[48px] md:w-[50%]">
            <div className="flex flex-col gap-[10px] text-left">
              <h3 className="text-clamp font-bold text-slate-950">
                Join Top Collaborative Classes
              </h3>

              <p className="text-lg font-normal text-neutral-700">
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
      </div>

      <div className="relative mb-[107px] rounded-[50px] px-4 py-[107px] shadow-customInner shadow-[#00AAF81A]">
        <img
          src={thorusUrl}
          alt=""
          className="absolute right-3 top-10 lg:right-20"
        />

        <img
          src={groupUrl}
          alt=""
          className="absolute bottom-16 left-3 lg:left-20 "
        />

        <div className="mx-auto flex w-[1120px] max-w-full flex-col items-center gap-12 md:flex-row lg:items-start">
          <div className="flex w-[503px] max-w-full flex-col gap-[48px] md:w-[50%]">
            <div className="flex flex-col gap-[10px] text-left">
              <h3 className="text-clamp font-bold text-slate-950">
                Create And Invite People To Your Classes
              </h3>

              <p className="text-lg font-normal text-neutral-700">
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

          <img src={createUrl} className="max-w-full md:w-[50%] " alt="" />
        </div>
      </div>

      <div className="relative mb-[107px] rounded-[50px] px-4 py-[107px] shadow-customInner1 shadow-[#3130330D]">
        <img
          src={thorusUrl}
          alt=""
          className="absolute bottom-16 left-3  lg:left-20"
        />

        <img
          src={iconUrl}
          alt=""
          className="absolute bottom-16 left-2/4 right-2/4"
        />

        <img
          src={iconUrl}
          alt=""
          className="absolute left-3 top-10 md:left-1/3"
        />

        <img
          src={groupUrl}
          alt=""
          className="absolute right-3 top-10 lg:right-20"
        />

        <div className="mx-auto flex w-[1120px] max-w-full flex-col items-center gap-12 md:flex-row lg:items-start">
          <img
            src={canvasUrl}
            className="max-w-full border md:w-[50%] "
            alt=""
          />

          <div className="flex w-[503px] max-w-full flex-col gap-[48px] md:w-[50%]">
            <div className="flex flex-col gap-[10px] text-left">
              <h3 className="text-clamp font-bold text-slate-950">
                Collaborative with people to solve math problems.
              </h3>

              <p className="text-lg font-normal text-neutral-700">
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
      </div>

      <div className="relative mb-[107px] space-y-[48px] px-4">
        <img
          src={iconUrl}
          alt=""
          className="absolute -top-6 left-[50%] right-[50%]"
        />
        <h3 className="mx-auto w-[658px] max-w-full text-clamp1 font-bold text-slate-950">
          What People Say About Math<span className="text-orange-500">C</span>
          ollab
        </h3>

        <div className="mx-auto flex w-[1054px] max-w-full flex-col items-center gap-[48px] md:flex-row lg:justify-between lg:gap-0">
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

      <div className="relative mb-[107px] rounded-[50px] px-4 py-[107px] shadow-customInner1 shadow-[#3130330D]">
        <img
          src={thorusUrl}
          alt=""
          className="absolute bottom-16 left-3  lg:left-20"
        />

        <img
          src={iconUrl}
          alt=""
          className="absolute bottom-16 left-2/4 right-2/4"
        />

        <img
          src={iconUrl}
          alt=""
          className="absolute left-3 top-10 md:left-1/3"
        />

        <img
          src={groupUrl}
          alt=""
          className="absolute right-3 top-10 lg:right-20"
        />

        <div className="space-y-[48px]">
          <div className="flex w-full flex-col items-center justify-center gap-[28px]">
            <h3 className="mx-auto w-[658px] max-w-full text-clamp1 font-bold text-slate-950">
              All Your Math Collaboration tools in one place
            </h3>
            <p className="w-[515px] max-w-full text-center text-lg font-normal text-neutral-700">
              MathCollab, a real-time interactive math collaboration app, can
              help you bring your success dream to life.
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
      </div>
    </main>
  );
}
