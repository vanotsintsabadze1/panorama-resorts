"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface Props {
  children: React.ReactNode;
}

export default function LenisWrapper({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}
