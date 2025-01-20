"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onLogIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response.data, "response");

      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>{isLoading ? "Loading" : "Login"}</h2>

      <div className="flex flex-col mt-4 justify-center items-center gap-2">
        <div>
          <label htmlFor="username">email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border p-2 ml-4 rounded"
          />
        </div>
        <div>
          <label htmlFor="username">password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border p-2 ml-4 rounded"
          />
        </div>
        <button
          disabled={buttonDisable}
          onClick={onLogIn}
          className="border p-2 rounded"
        >
          {buttonDisable ? "Please fill all the fields" : "Login"}
        </button>
        <Link href="/signup">Signup</Link>
        <Link href="/forgotpassword">Forgot Password</Link>
      </div>
    </div>
  );
};
export default Login;
