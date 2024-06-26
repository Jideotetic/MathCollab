import MathCollab from "../MathCollab";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import Inputs from "./Inputs";
import { useContext, useEffect, Fragment, useState } from "react";
import { FormsContext, FormsContextType } from "../../contexts/FormsContext";
import FormWrapper from "./FormWrapper";
import { Transition, Dialog } from "@headlessui/react";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";

const inputs = [{ label: "Class name", inputType: "text" }];

export default function CreateClassForm() {
  const { setCreateClassFormOpen, createClassFormOpen } = useContext(
    FormsContext,
  ) as FormsContextType;
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [notifyRequired, setNotifyRequired] = useState(false);

  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  useEffect(() => {
    if (createClassFormOpen === false) {
      navigate("/dashboard");
    }
  }, [createClassFormOpen, navigate]);

  useEffect(() => {
    setNotifyRequired(collaborators.length > 0);
  }, [collaborators]);

  return (
    <Transition show={createClassFormOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setCreateClassFormOpen(false);
          navigate("/dashboard");
        }}
      >
        <FormWrapper>
          <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
            <MathCollab />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold leading-[30px]">
                Create a class
              </h2>

              <p className="text-base font-normal leading-normal">
                Provide your class information below
              </p>
            </div>
          </div>

          <Form
            className="flex w-full min-w-[202px] flex-col gap-8"
            method="post"
            action="."
          >
            <div className=" flex flex-col gap-8">
              <Inputs inputs={inputs} />

              <div className="relative flex flex-col items-start gap-2">
                <label
                  htmlFor="class-start-date"
                  className="text-md text-neutral-600"
                >
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  name="Class start date"
                  id="class-start-date"
                  required
                  className="peer w-full rounded-lg border-neutral-200 bg-white pb-3 pr-8 pt-3 text-sm placeholder-transparent shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label htmlFor="collaborators">
                  Invite Collaborators/Students via email
                </label>
                {/* <input
                  type="email"
                  name="collaborators"
                  id="collaborators"
                  multiple
                  required
                  className="form-input  inline-block h-20 w-full rounded-lg border-neutral-200 bg-white pb-3 pr-8 pt-3 text-sm placeholder-transparent shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                /> */}
                <ReactMultiEmail
                  emails={collaborators}
                  onChange={(_collaborators: string[]) => {
                    setCollaborators(_collaborators);
                  }}
                  className="h-20 w-full overflow-auto rounded-lg border-2 bg-white text-sm shadow-sm focus:border-sky-500"
                  inputClassName="form-input focus:border-none focus:outline-none focus:ring-0"
                  autoFocus={true}
                  getLabel={(email: string, index: number, removeEmail) => {
                    return (
                      <div data-tag key={index}>
                        <div data-tag-item>{email}</div>
                        <span
                          data-tag-handle
                          onClick={() => removeEmail(index)}
                        >
                          ×
                        </span>
                      </div>
                    );
                  }}
                />
                <input
                  type="hidden"
                  value={collaborators}
                  name="collaborators"
                />

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="notify"
                    id="notify"
                    required={notifyRequired}
                    className="form-checkbox ml-1 mt-1 inline-block cursor-pointer rounded-sm border-neutral-300 text-slate-950 shadow-sm hover:text-slate-800 focus:ring-slate-950 hover:focus:ring-slate-800"
                  />
                  <label
                    htmlFor="notify"
                    className="text-base font-normal leading-normal"
                  >
                    Notify
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
            >
              {busy ? "Creating class..." : "Create class"}
            </button>
          </Form>
        </FormWrapper>
      </Dialog>
    </Transition>
  );
}
