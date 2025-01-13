import { auth } from "@/auth";
import Navbar from "../../components/Navbar/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <></>
    // <main className="font-work-sans">
    //   <Navbar session={session} />
    //   {children}
    // </main>
  );
}
