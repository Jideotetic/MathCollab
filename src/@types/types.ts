import { Timestamp } from "firebase/firestore";

export interface ClassData {
  id: string;
  likedBy: string[];
  likes: number;
  name: string;
  status: string | Timestamp;
  title: string;
  user: string;
  video: string;
  views: number;
}
