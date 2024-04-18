"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between dark:border-0 border-b border-black/5 shadow-b-sm">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold dark:text-white text-black", font.className)}>
          Virtuo
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
      <ThemeToggle />
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="rounded-full dark:bg-white dark:text-black">
                Get Started
            </Button>
        </Link>
      </div>
    </nav>
  );
};
