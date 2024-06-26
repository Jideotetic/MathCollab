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
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Collaborators from "../components/Collaborators";
import ClassChat from "../components/ClassChat";
import {
  useNavigate,
  useNavigation,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import GlobalSlider from "../components/GlobalSlider";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
// import { server } from "../socket";
import "katex/dist/katex.min.css";
// import { InlineMath } from "react-katex";
import ReactDOM from "react-dom/client";
// import { ClassData } from "../@types/types";
import { Popover } from "@headlessui/react";
import { User } from "firebase/auth";
import { server } from "../socket";
import { InlineMath } from "react-katex";

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
  const { currentUser } = useRouteLoaderData("canvas") as {
    currentUser: User;
  };
  const { id } = useParams();
  const [joinedUser, setJoinedUser] = useState<User | null>(null);

  useEffect(() => {
    server.on("class-started", () => {
      toast.success("Class started successfully");
    });
  }, []);

  useEffect(() => {
    server.on("joined-successfully", (data) => {
      const { user } = data;
      setJoinedUser(user);
      toast.success("Joined class successfully");
    });
  }, []);

  useEffect(() => {
    server.on("joined", (data) => {
      console.log("joined");
      const { user } = data;
      toast.success(`${user.displayName} joined the class`);
    });
  }, []);

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

  const [text, setText] = useState("");
  const [joined, setJoined] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);
  const [classContent, setClassContent] = useState<string[]>([]);

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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newContent: string[] = [...classContent, text];
    setClassContent(newContent);
    server.emit("send-text", { newContent, id });
    setText("");
  }

  useEffect(() => {
    server.on("receive-text", (newContent) => {
      console.log(newContent);
      setClassContent(newContent);
    });
  }, []);

  useEffect(() => {
    server.on("receive-initial-text", (newContent) => {
      setJoined(true);
      setClassContent(newContent);
    });
  }, []);

  useEffect(() => {
    console.log(joined);
    if (joined) {
      classContent.forEach((text: string) => {
        const li = document.createElement("li");
        text = parseCommand(text);
        console.log(text);
        const val = <InlineMath>{text}</InlineMath>;
        ReactDOM.createRoot(li).render(val);
        listRef.current?.appendChild(li);
      });
    }
  }, [classContent, joined]);

  useEffect(() => {
    if (joined) {
      setJoined(false);
      return;
    }
    if (classContent.length > 0) {
      console.log("true");
      let text = classContent[classContent.length - 1];
      const li = document.createElement("li");
      text = parseCommand(text);
      console.log(text);
      const val = <InlineMath>{text}</InlineMath>;
      ReactDOM.createRoot(li).render(val);
      listRef.current?.appendChild(li);
    } else {
      console.log("false");
      classContent.forEach((text: string) => {
        const li = document.createElement("li");
        text = parseCommand(text);
        console.log(text);
        const val = <InlineMath>{text}</InlineMath>;
        ReactDOM.createRoot(li).render(val);
        listRef.current?.appendChild(li);
      });
    }
  }, [classContent, joined]);

  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <ToastContainer />
      <div></div>
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
              disabled={currentUser.displayName === joinedUser?.displayName}
              className="h-[38px] w-full rounded border border-neutral-200 bg-white font-['Raleway'] text-xs font-normal leading-[18px] text-neutral-500 shadow-sm disabled:cursor-not-allowed"
              placeholder="Type your command or equation here"
            />
            {/* <input type="hidden" name="id" value={id} />
            <input type="hidden" name="class-content" value={classContent} /> */}
          </form>

          <ul
            ref={listRef}
            className="relative z-0 h-[calc(100vh-135px)] overflow-auto rounded border border-neutral-200 bg-white p-2 text-xs font-normal leading-[18px] text-neutral-500 focus:border-none focus:outline-none focus:ring-0"
          ></ul>

          <div className="item-center flex h-[43px] justify-evenly rounded-lg border border-neutral-200 bg-white p-1 shadow-sm">
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
