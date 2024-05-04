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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Collaborators from "../components/Collaborators";
import ClassChat from "../components/ClassChat";
import {
  Form,
  useNavigate,
  useNavigation,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalSlider from "../components/GlobalSlider";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { server } from "../socket";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import ReactDOM from "react-dom/client";
import { ClassData } from "../@types/types";
import { Popover } from "@headlessui/react";

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
  const { initialTexts, classes, host } = useRouteLoaderData("canvas") as {
    initialTexts: string[];
    classes: ClassData[];
    host: boolean;
  };
  const { id } = useParams();
  const [content, setContent] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  console.log(classes);

  function parseCommand(input: string) {
    const regex = /(\w+)\(([^)]+)\)/;
    const match = input.match(regex);

    if (!match) {
      return input;
    }

    const command = match[1].trim().toLowerCase();
    const args = match[2].split(",").map((arg) => arg.trim());

    switch (command) {
      case "sum":
        console.log(args);
        return `${args[0]} + ${args[1]} = ${
          parseFloat(args[0]) + parseFloat(args[1])
        }`;
      case "sub":
        console.log(args);
        return `${args[0]} - ${args[1]} = ${
          parseFloat(args[0]) - parseFloat(args[1])
        }`;
      case "mul":
        console.log(args);
        return `${args[0]} * ${args[1]} = ${
          parseFloat(args[0]) * parseFloat(args[1])
        }`;
      case "div":
        return `${args[0]} ÷ ${args[1]} = ${
          parseFloat(args[0]) / parseFloat(args[1])
        }`;
      case "sqrt":
        if (args.length !== 1) {
          throw new Error("sqrt command requires exactly one operand");
        }
        return `\\sqrt${args[0]} = ${Math.sqrt(parseFloat(args[0]))}`;
      // case "pow":
      // if (args.length !== 2) {
      //   throw new Error("pow command requires exactly two operands");
      // }
      // return {
      //   operation: "pow",
      //   base: parseFloat(args[0]),
      //   exponent: parseFloat(args[1]),
      // };
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  }

  useEffect(() => {
    console.log(initialTexts);
    initialTexts.forEach((text: string) => {
      const li = document.createElement("li");
      text = parseCommand(text);
      console.log(text);
      const val = <InlineMath>{text}</InlineMath>;
      ReactDOM.createRoot(li).render(val);
      listRef.current?.appendChild(li);
    });
  }, []);

  useEffect(() => {
    server.on("text", (globalTexts) => {
      if (globalTexts.length > 0) {
        let text = globalTexts[globalTexts.length - 1];
        const li = document.createElement("li");
        text = parseCommand(text);
        console.log(text);
        const val = <InlineMath>{text}</InlineMath>;
        ReactDOM.createRoot(li).render(val);
        listRef.current?.appendChild(li);
      } else {
        return;
      }
    });
  }, []);

  // const [host, setHost] = useState(false);
  // const [id, setId] = useState<string | null>("");
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

  function handleEndClass(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const docRef = doc(db, `classes/${id}`);
    updateDoc(docRef, {
      status: new Date(),
    });
    navigate("/dashboard");
  }

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

  useEffect(() => {
    server.emit("content", content);
  }, [content]);

  useEffect(() => {
    server.on("content-data", (content) => {
      setContent(content);
    });
  }, []);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   ctx.font = "12px serif italic";
  //   ctx.fillStyle = "black";
  //   ctx.fillText("text", 5, 160);
  //   // texts.forEach((text, index) => {
  //   // });
  // }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  // useEffect(() => cleanup(), [cleanup]);

  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <ToastContainer />
      {/* <div></div> */}
      <div className="mx-auto grid h-screen max-w-[1280px] gap-1 bg-white px-4 py-4 sm:grid-cols-mediumCanvasLayout md:grid-cols-canvasLayout">
        <div className="hidden rounded-lg border bg-white p-1 shadow-sm md:block">
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
          {/* <div >

          </div> */}
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-neutral-200 bg-white p-1 shadow-sm">
          <Form
            method="POST"
            action="."
            onSubmit={() => {
              setContent("");
            }}
          >
            <input
              type="text"
              name="text"
              value={content}
              onChange={handleChange}
              disabled={host}
              className="h-[38px] w-full rounded border border-neutral-200 bg-white font-['Raleway'] text-xs font-normal leading-[18px] text-neutral-500 shadow-sm"
              placeholder="Type your command or equation here"
            />
            <input type="hidden" name="id" value={id} />
          </Form>

          <ul
            ref={listRef}
            className="relative z-0 h-[calc(100vh-135px)] overflow-auto rounded border border-neutral-200 bg-white p-2 text-xs font-normal leading-[18px] text-neutral-500 focus:border-none focus:outline-none focus:ring-0"
          ></ul>

          <div className="item-center flex h-[43px] justify-evenly rounded-lg border border-2 border-neutral-200  border-red-500 bg-white p-1 shadow-sm">
            <Popover className="flex items-center justify-center md:hidden">
              <Popover.Button
                className="flex w-[15px] items-center justify-center"
                title="Pen tools"
              >
                <img src={arrowUrl} />
              </Popover.Button>

              <Popover.Panel className="absolute bottom-20 left-0 ml-4 w-[280px] rounded-lg border bg-white p-1 shadow-sm">
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
              </Popover.Panel>
            </Popover>

            <button
              type="button"
              onClick={handleEndClass}
              className="flex flex-col items-center justify-center"
              title="End class"
            >
              <img src={powerIconUrl} alt="" />
              {/* <span className="text-xs font-normal leading-[18px] text-neutral-500">
                End
              </span> */}
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
              title="Turn off microphone"
            >
              <img src={micIconUrl} alt="" />
              {/* <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Mic On
              </span> */}
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
              title="Turn off camera"
            >
              <img src={cameraIconUrl} alt="" />
              {/* <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Cam Off
              </span> */}
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
              title="Record"
            >
              <img src={recordIconUrl} alt="" className="h-4 w-4" />
              {/* <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Record
              </span> */}
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
              title="Share"
            >
              <img src={shareIconUrl} alt="" />
              {/* <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Share
              </span> */}
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center"
              title="Raise hand"
            >
              🖐️
              {/* <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Reactions
              </span> */}
            </button>
            {/* <button
              type="button"
              className="flex flex-col items-center justify-center sm:hidden"
              title="Show collaborators"
            >
              <UserPlusIcon className="h-4 w-4" />
              <span className="text-xs font-normal leading-[18px] text-neutral-500">
                Invite
              </span>
            </button> */}

            <Popover className="flex items-center justify-center sm:hidden">
              <Popover.Button
                className="flex items-center justify-center"
                title="Show collaborators"
              >
                <UserPlusIcon className="h-4 w-4" />
              </Popover.Button>

              <Popover.Panel className="absolute right-0 top-0 h-full w-[280px] rounded-lg border bg-white p-1 shadow-sm">
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
              </Popover.Panel>
            </Popover>
          </div>
        </div>

        <div className="hidden rounded-lg border border-neutral-200 bg-white p-2 shadow-sm sm:block">
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
