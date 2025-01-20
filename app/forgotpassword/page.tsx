"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post("/api/users/forgotpassword", { email });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 p-20 border rounded-md"
      >
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            className="p-2 border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit">{isLoading ? "Loading..." : "Submit"} </Button>
      </form>
    </div>
  );
};
export default ForgotPassword;
