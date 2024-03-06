import { ChangeEvent, useState } from "react";
import userImageUrl from "../assets/user.jpeg";
import { updateProfile } from "firebase/auth";
import { storage } from "../firebase";
import { authProvider } from "../auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function ImageUpload() {
  const [imageSrc, setImageSrc] = useState<string>(userImageUrl);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        setImageSrc(e.target?.result as string);
        if (authProvider.user) {
          try {
            const storageRef = ref(
              storage,
              `profile_images/${authProvider.user.uid}`,
            );
            await uploadBytes(storageRef, file);
            const photoURL = await getDownloadURL(storageRef);
            updateProfile(authProvider.user!, {
              photoURL: photoURL,
            });
          } catch (error) {
            console.error("Error updating photo URL:", error);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-10 w-10">
      <img
        src={(authProvider.user?.photoURL as string | undefined) || imageSrc}
        alt="Click to upload image"
        onClick={() => document.getElementById("fileInput")?.click()}
        className="h-full w-full cursor-pointer rounded-full object-cover"
        title="Change avatar"
      />
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
}
