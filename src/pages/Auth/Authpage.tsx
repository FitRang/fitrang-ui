import { useState } from "react";
import { Button } from "@components/Button";

export default function Authpage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <article className="h-screen w-screen flex flex-col justify-center items-center">
      <section className="bg-grey border-4 border-gold h-auto  w-auto rounded-xl flex flex-col p-8 items-center">
        <h1 className="text-gold font-bold font-dancing text-5xl mb-5">
          LogIn
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-grey border-2 border-gold rounded-md text-white p-1 m-2"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="bg-grey border-2 border-gold rounded-md text-white p-1 m-2"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <Button disp="LogIn" />
      </section>
    </article>
  );
}
