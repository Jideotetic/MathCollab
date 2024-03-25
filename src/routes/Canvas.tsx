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
import { ChangeEvent, useState } from "react";
import Collaborators from "../components/Collaborators";
import ClassChat from "../components/ClassChat";
// import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
// import { RoomContext, RoomContextType } from "../contexts/RoomContextType";
import { ToastContainer } from "react-toastify";
// import { useRouteLoaderData } from "react-router-dom";
// import { User } from "firebase/auth";
import GlobalSlider from "../components/GlobalSlider";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
// import rough from "roughjs";
// import { HostContextType, RoomContext } from "../contexts/RoomContext";

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
  // const { lessons } = useRouteLoaderData("canvas");

  const { id } = useParams();
  // const [host, setHost] = useState(false);
  // const [id, setId] = useState<string | null>("");
  const [content, setContent] = useState("");
  // const [className, setClassName] = useState<string | null>("");
  // const [sharedContent, setSharedContent] = useState("Shared");
  // const [element, setElement] = useState([]);
  // const [isDrawing, setIsDrawing] = useState(false);
  // const { user } = useRouteLoaderData("canvas") as {
  //   user: User;
  // };
  // const { setJoinClassFormOpen, setCreateClassFormOpen } = useContext(
  //   FormsContext,
  // ) as FormsContextType;
  // const [drawing, setDrawing] = useState("");
  // const roughGenerator = rough.generator();

  // const handleMouseDown = (
  //   e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>,
  // ) => {
  //   const { offsetX, offsetY } = e.nativeEvent;

  //   console.log(offsetX, offsetY);
  //   setIsDrawing(true);
  // };

  // const handleMouseUp = (
  //   e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>,
  // ) => {
  //   const { offsetX, offsetY } = e.nativeEvent;

  //   console.log(offsetX, offsetY);
  //   setIsDrawing(false);
  // };

  // const handleMouseMove = (
  //   e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>,
  // ) => {
  //   const { offsetX, offsetY } = e.nativeEvent;
  //   if (isDrawing) {
  //     console.log(offsetX, offsetY);
  //   }
  // };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("canvas");

  // }, []);

  const navigation = useNavigation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(lessons);
  //   // const docRef = doc(db, `classes/${id}`);
  //   // updateDoc(docRef, {
  //   //   status: "ongoing",
  //   // });
  // }, [lessons]);

  function handleEndClass(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const docRef = doc(db, `classes/${id}`);
    updateDoc(docRef, {
      status: "done",
    });
    navigate("/dashboard");
  }

  // useEffect(() => {
  //   server.on("user-joined", (data) => {
  //     const { success } = data;
  //     if (success) {
  //       toast.success(`${user.displayName} join`);
  //     }
  //   });
  // }, [user.displayName]);

  // useEffect(() => {
  //   server.on("host-create", (data) => {
  //     setHost(data.host);
  //     setId(data.id);
  //     setClassName(data.className);
  //     sessionStorage.setItem("host", data.host);
  //     sessionStorage.setItem("id", data.id);
  //     sessionStorage.setItem("className", data.className);
  //   });

  //   const id = sessionStorage.getItem("id");
  //   setId(id);
  //   const tempHost = sessionStorage.getItem("host");
  //   setHost(tempHost === "true");
  //   const className = sessionStorage.getItem("className");
  //   setClassName(className);
  //   if (host === true) {
  //     toast.info(`You start the ${className} class`);
  //     toast.info(`Share the id ${id} with user to join`);
  //   }
  // }, [host]);

  // useEffect(() => {
  //   if (host === true) {
  //     server.emit("canvas-data", content);
  //   }
  // }, [content, host]);

  // useEffect(() => {
  //   server.on("canvas-response", (data) => {
  //     // setSharedContent(data);
  //     console.log(data);
  //   });
  // }, []);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }

  // console.log("host", "===>", host, "id", "===>", id);

  // useEffect(() => {
  //   setJoinClassFormOpen(false);
  //   setCreateClassFormOpen(false);
  // }, [setCreateClassFormOpen, setJoinClassFormOpen]);
  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
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
            // defaultValue={className as string}
            className="h-[38px] w-full rounded border border-neutral-200 bg-white font-['Raleway'] text-xs font-normal leading-[18px] text-neutral-500 shadow-sm"
            placeholder="Type in the questions you are solving to keep collaborators informed"
          />
          {/* {host === true ? (
            <textarea
              value={content}
              onChange={handleChange}
              // onMouseDown={handleMouseDown}
              // onMouseMove={handleMouseMove}
              // onMouseUp={handleMouseUp}
              className="h-[calc(100vh-135px)]  border-none bg-white focus:border-none focus:outline-none focus:ring-0"
            ></textarea>
          ) : (
            <textarea
              disabled
              value={sharedContent}
              className="h-[calc(100vh-135px)]  border-none bg-white focus:border-none focus:outline-none focus:ring-0"
            ></textarea>
          )} */}
          <textarea
            // disabled={host ? false : true}
            value={content}
            onChange={handleChange}
            className="h-[calc(100vh-135px)]  border-none bg-white focus:border-none focus:outline-none focus:ring-0"
          ></textarea>
          <div className="flex h-[43px] justify-evenly rounded-lg border  border-neutral-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={handleEndClass}
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
