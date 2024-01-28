import { Dispatch, SetStateAction } from "react";

export interface ClassType {
  className: string;
  dateCreated: string;
  owner: string;
  people: string[];
  status: string;
}

export interface ClassListType {
  classList: ClassType[];
  setClassList: Dispatch<SetStateAction<ClassType[]>>;
}
