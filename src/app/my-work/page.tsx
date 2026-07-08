import type { Metadata } from "next";
import MyWorkClient from "./MyWorkClient";

export const metadata: Metadata = {
  title: "My Work - Tanzil Hussain",
  description: "Internships and projects by Tanzil Hussain - AI, data engineering, and full-stack development.",
};

export default function MyWorkPage() {
  return <MyWorkClient />;
}
