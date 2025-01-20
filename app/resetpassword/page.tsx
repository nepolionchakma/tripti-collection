"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const ResetPassword = () => {
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/users/resetpassword", {
        token,
        oldPassword,
        password,
      });
      if (res.data.success) {
        router.push("/login");
      }
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        console.log(error.message, "error");
      }
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center mt-40 p-5">
      <form
        onSubmit={resetPassword}
        className="flex flex-col gap-2 w-[40%] border p-10 rounded"
      >
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            className="outline-none border rounded px-2 py-1"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="outline-none border rounded px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="outline-none border rounded px-2 py-1"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button
          disabled={password === "" || password !== confirmPassword}
          type="submit"
        >
          Reset Password
        </Button>
        {error && (
          <div>
            <h2 className="text-2xl bg-red-500 text-black">Error</h2>
          </div>
        )}
      </form>
    </div>
  );
};
export default ResetPassword;
