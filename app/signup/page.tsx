"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSigUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data, "response");

      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>{isLoading ? "Loading" : "Signup"}</h2>

      <div className="flex flex-col mt-4 gap-2">
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            placeholder="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="border p-2 ml-4 rounded"
          />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border p-2 ml-4 rounded"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border p-2 ml-4 rounded"
          />
        </div>
        <button
          disabled={buttonDisable}
          onClick={onSigUp}
          className="border p-2 rounded"
        >
          {buttonDisable ? "Please fill all the fields" : "Signup"}
        </button>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};
export default Signup;
