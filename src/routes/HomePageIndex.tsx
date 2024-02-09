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
import dashboardUrl from "../assets/Dashboard.png";
import { useContext } from "react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { Link } from "react-router-dom";

export default function HomePageIndex() {
  const { setSignUpFormOpen } = useContext(FormsContext) as FormsContextType;

  return (
    <main className="mx-auto w-[1280px] max-w-full text-center">
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
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
              title="Firebase Authentication Tutorial #1 - Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-auto max-w-full"
            ></iframe>
            <div className="mx-auto flex w-[375px] max-w-full flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
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
                View More Classes
              </Link>
            </div>
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

      <div className="mx-auto mb-[107px] w-[1120px] max-w-full space-y-[48px] px-4">
        <div className="mx-auto w-[722px] max-w-full space-y-[48px]">
          <div className="space-y-[10px]">
            <h3 className="mx-auto w-[600px] max-w-full text-clamp1 font-bold text-slate-950">
              Access Your Own Math<span className="text-orange-500">C</span>
              ollab Classes Now
            </h3>

            <p className="mx-auto w-[515px] max-w-full text-lg font-normal text-neutral-700">
              Imagine having your very own access to math collaborative tools.
              MathCollab can help with all aspects of collaboration.
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

        <div className="mx-auto w-full">
          <img src={dashboardUrl} className="mx-auto max-w-full" alt="" />
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

{
  /* <div className="bg-image bg-cover bg-top bg-no-repeat pt-12">
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

      <div className="mx-auto mb-[72px] flex w-[1068px] max-w-full flex-col items-center justify-end gap-[48px] text-center lg:flex-row lg:justify-between lg:gap-0">
        <img src={joinUrl} className="h-auto w-[450px] max-w-full" alt="" />
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
        <img src={createUrl} className="h-auto w-[450px] max-w-full" alt="" />
      </div>

      <div className="mx-auto mb-[72px] flex w-[1068px] max-w-full flex-col gap-[48px] lg:flex-row lg:justify-between lg:gap-0">
        <img src={canvasUrl} className="h-auto w-[450px] max-w-full" alt="" />
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
      </div> */
}
