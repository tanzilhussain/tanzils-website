import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Tanzil Hussain",
  description: "USC student passionate about AI, product management, and building impactful tech.",
};

export default function HomePage() {
  return <HomeClient />;
}
