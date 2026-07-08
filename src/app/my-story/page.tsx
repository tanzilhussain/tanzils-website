import type { Metadata } from "next";
import MyStoryClient from "./MyStoryClient";

export const metadata: Metadata = {
  title: "About Me - Tanzil Hussain",
  description: "Learn more about Tanzil Hussain - USC student, AI enthusiast, and aspiring product manager.",
};

export default function MyStoryPage() {
  return <MyStoryClient />;
}
