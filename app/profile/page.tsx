"use client";
import axios from "axios";
import { useEffect, useState } from "react";
interface ProfileProps {
  message: string;
  data: {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean;
    isAdmin: boolean;
    __v: number;
  };
}
const Profile = () => {
  const [data, setData] = useState<ProfileProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setData(res.data);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof Error) {
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div>
      <h3>User Name : {isLoading ? "loading" : data?.data.username}</h3>
      <h3>Email : {isLoading ? "loading" : data?.data.email}</h3>
    </div>
  );
};
export default Profile;
