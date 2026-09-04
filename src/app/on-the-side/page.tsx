import type { Metadata } from "next";
import OnTheSideClient from "./OnTheSideClient";

export const metadata: Metadata = {
  title: "On the Side | Tanzil Hussain",
  description: "Photography by Tanzil Hussain, shot on a Canon EOS T5i and Kodak PixPro.",
};

export default function OnTheSidePage() {
  return <OnTheSideClient />;
}
