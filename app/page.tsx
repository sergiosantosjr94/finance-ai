import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import SummaryCards from "./(home)/summary-cards";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <SummaryCards />
    </>
  );
}
