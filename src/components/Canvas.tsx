import greenBrushUrl from "../assets/green-brush.svg";
import blackBrushUrl from "../assets/black-brush.svg";
import purpleBrushUrl from "../assets/purple-brush.svg";
import redBrushUrl from "../assets/red-brush.svg";
import copyIconUrl from "../assets/copy.svg";
import scissorsUrl from "../assets/scissor.svg";
import eraserUrl from "../assets/eraser.svg";
import arrowUrl from "../assets/Polygon 1.svg";
import cicleIconUrl from "../assets/circle.svg";
import arrowIconUrl from "../assets/arrow 1.svg";
import lineIconeUrl from "../assets/line (3).svg";
import triangleIconUrl from "../assets/triangle.svg";
import squareIconUrl from "../assets/square.svg";
import powerIconUrl from "../assets/power.svg";
import shareIconUrl from "../assets/share.svg";
import micIconUrl from "../assets/microphone-slash.svg";
import cameraIconUrl from "../assets/video-slash.svg";
import recordIconUrl from "../assets/record-circle.svg";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Collaborators from "./Collaborators";
import ClassChat from "./ClassChat";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
// import { RoomContext, RoomContextType } from "../contexts/RoomContextType";
import { ToastContainer, toast } from "react-toastify";
import { useRouteLoaderData } from "react-router-dom";
import { User } from "firebase/auth";
import { server } from "../contexts/socket";

const penTools = [
  arrowUrl,
  copyIconUrl,
  scissorsUrl,
  eraserUrl,
  blackBrushUrl,
  purpleBrushUrl,
  redBrushUrl,
  greenBrushUrl,
];

const shapes = [
  cicleIconUrl,
  triangleIconUrl,
  squareIconUrl,
  arrowIconUrl,
  cicleIconUrl,
  lineIconeUrl,
  squareIconUrl,
  arrowIconUrl,
  cicleIconUrl,
  lineIconeUrl,
  squareIconUrl,
  arrowIconUrl,
];

export default function Canvas() {
  const [collaboratorsViewActive, setCollaboratorsViewActive] = useState(true);
  const [host, setHost] = useState(false);
  const { user } = useRouteLoaderData("canvas") as {
    user: User;
  };
  const [content, setContent] = useState("Solution");

  const {
    // setJoinClassFormOpen,
    joinClassFormOpen,
    createClassFormOpen,
    // setCreateClassFormOpen,
  } = useContext(FormsContext) as FormsContextType;

  console.log(
    "joinClassFormOpen",
    joinClassFormOpen,
    "createClassFormOpen",
    createClassFormOpen,
    "host",
    host,
    user,
  );

  // const { server } = useContext(RoomContext) as RoomContextType;

  useEffect(() => {
    // server.on("class-created", (data) => {
    //   data.success
    //     ? toast.success(`You start the ${data.className} class`)
    //     : console.log("Something went wrong");
    // });

    // setHost(presenter);

    server.on("user-joined", (data) => {
      data.success
        ? toast.success(`${user.displayName} join`)
        : console.log("Something went wrong");
    });

    server.on("host", (data) => {
      toast.info(data.host);
      setHost(data.host);
    });

    server.emit("canvas-data", content);
  }, [user.displayName, content]);

  useEffect(() => {
    server.on("canvas-data-response", (data) => {
      setContent(data);
    });
  }, []);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }

  // useEffect(() => {
  //   if (joinClassFormOpen === true) {
  //     setHost(false);
  //   }
  //   if (createClassFormOpen === true) {
  //     setHost(true);
  //   }
  // }, [
  //   setCreateClassFormOpen,
  //   joinClassFormOpen,
  //   createClassFormOpen,
  //   setJoinClassFormOpen,
  // ]);
  return (
    <>
      <ToastContainer />
      <div></div>
      <div className="mx-auto grid min-h-screen max-w-[1280px] grid-cols-canvasLayout gap-1 bg-white px-4 py-4">
        <div className="rounded-lg border  border-neutral-200 bg-white p-1 shadow-sm">
          <div className="text-base font-medium leading-normal text-neutral-700">
            Pen tools
          </div>
          <div className="m-1 flex  flex-wrap gap-5 rounded-lg border border-neutral-200 bg-white p-2">
            {penTools.map((tool) => (
              <button
                type="button"
                key={tool}
                className="rounded p-1 hover:bg-gray-200"
              >
                <img src={tool} alt="" />
              </button>
            ))}
          </div>
          <div className="text-base font-medium leading-normal text-neutral-700">
            Shapes
          </div>
          <div className="m-1 rounded-lg  border border-neutral-200 bg-white p-2">
            <div className="text-xs font-normal leading-[18px] text-neutral-700">
              Basic Shapes
            </div>
            <div>
              {shapes.map((shape, i) => (
                <button
                  type="button"
                  key={i}
                  className="rounded hover:bg-gray-200"
                >
                  <img src={shape} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div className="text-base font-medium leading-normal text-neutral-700">
            Equations
          </div>
          <div className="m-1 rounded-lg  border border-neutral-200 bg-white p-2">
            <div className="text-xs font-normal leading-[18px] text-neutral-700">
              Areas of a circle
            </div>
            <code>
              <pre className="rounded-lg border border-neutral-200  bg-white py-1 text-center italic">
                A = πr<sup>2</sup>
              </pre>
            </code>
            <div className="text-xs font-normal leading-[18px] text-neutral-700">
              Pythagoras theorem
            </div>
            <code>
              <pre className="rounded-lg border border-neutral-200  bg-white py-1 text-center italic">
                a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
              </pre>
            </code>
          </div>
        </div>

        <div className="flex flex-col  gap-1 rounded-lg border border-neutral-200 bg-white p-1 shadow-sm">
          <input
            type="text"
            // value={params.}
            className="h-[38px] w-full rounded border border-neutral-200 bg-white font-['Raleway'] text-xs font-normal leading-[18px] text-neutral-500 shadow-sm"
            placeholder="Type in the questions you are solving to keep collaborators informed"
          />
          <textarea
            disabled={host ? false : true}
            value={content}
            onChange={handleChange}
            className="h-[calc(100vh-135px)]  border-none bg-white focus:border-none focus:outline-none focus:ring-0"
          ></textarea>
          <div className="flex h-[43px] justify-evenly rounded-lg border  border-neutral-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              <img src={powerIconUrl} alt="" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                End
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              <img src={micIconUrl} alt="" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Mic On
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              <img src={cameraIconUrl} alt="" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Cam Off
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              <img src={recordIconUrl} alt="" className="h-4 w-4" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Record
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              <img src={shareIconUrl} alt="" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Share
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              🖐️
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Reactions
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
            >
              <UserPlusIcon className="h-4 w-4" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Invite
              </span>
            </button>
          </div>
        </div>

        <div className="rounded-lg border  border-neutral-200 bg-white p-2 shadow-sm">
          <div className="mb-2 flex justify-between text-base font-medium leading-normal text-neutral-700">
            <button
              type="button"
              onClick={() => setCollaboratorsViewActive(true)}
              className={`${
                collaboratorsViewActive ? "border-b-4 border-black" : ""
              }`}
            >
              Collaborators
            </button>
            <button
              type="button"
              onClick={() => setCollaboratorsViewActive(false)}
              className={`${
                collaboratorsViewActive ? "" : "border-b-4 border-black"
              }`}
            >
              Class Chat
            </button>
          </div>
          <div>
            {collaboratorsViewActive ? <Collaborators /> : <ClassChat />}
          </div>
        </div>
      </div>
    </>
  );
}
