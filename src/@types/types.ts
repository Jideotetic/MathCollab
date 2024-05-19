import { Timestamp } from "firebase/firestore";

export interface ClassData {
  id?: string;
  collaborators: string[];
  classTitle: string;
  creatorImage: string | null;
  creatorName: string;
  endClassDate?: Timestamp;
  likes: string[];
  startClassDate?: Timestamp;
  status: "upcoming" | "ongoing" | "completed";
  video: string;
  views: number;
}
