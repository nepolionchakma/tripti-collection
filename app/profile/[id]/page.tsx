import { FC } from "react";

const UserProfile: FC<{ params: { id: string } }> = ({ params }) => {
  return <div>UserProfile {params.id}</div>;
};
export default UserProfile;
