import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"; 
import { useDispatch } from "react-redux";  
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // companyName: result.finance.displayName,
          email: result.finance.email,
          country: result.finance.country,
          photo: result.finance.photoURL,

        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/dashboard");

      console.log(data);
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className=" text-slate-500 p-1 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
