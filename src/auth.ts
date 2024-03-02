import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { temp } from "./otp";
import { redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

interface AuthProvider {
  user: User | null;
  checkAuth(): Promise<void>;

  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<string | number | Response | undefined>;

  login(
    username: string,
    password: string,
  ): Promise<string | number | Response>;

  signout(): Promise<void>;
}

export const authProvider: AuthProvider = {
  user: null,

  async checkAuth() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (currentUser) => {
        authProvider.user = currentUser;
        resolve();
      });
    });
  },

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    temp.email = email;
    const otpValue = temp.otpValue;

    function sendOTP() {
      const templateParams = {
        to_email: email,
        to_name: "Collaborator",
        message: otpValue,
      };

      emailjs
        .send(
          "service_gmfhpbo",
          "template_q4nt0w6",
          templateParams,
          "ATX_F8kDIENLslJVM",
        )
        .then(() => {
          return toast.success("Email sent successfully!");
        })
        .catch(() => {
          return toast.error("Error sending email contact administrator");
        });
    }

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        authProvider.user = userCredential.user;
        updateProfile(authProvider.user!, {
          displayName: firstName + " " + lastName,
        });
        sendOTP();
        return redirect("/verify-email");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          temp.email = "";
          return toast.error("Email Already in Use");
        } else if (error.code === "auth/invalid-email") {
          temp.email = "";
          return toast.error("Invalid email");
        }
      });
  },

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        authProvider.user = userCredential.user;
        return redirect("/dashboard");
      })
      .catch(() => {
        return toast.error("Password or Email invalid");
      });
  },

  async signout() {
    signOut(auth);
    authProvider.user = null;
  },
};
