"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/use-scroll";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedlayout = useSelectedLayoutSegment;

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg:white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg:white": selectedlayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <Icon icon="lucide:cat" width={28} height={28} />
            <span className="font-bold text-xl flex">MyLogo</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <Icon icon="lucide:user-circle-2" width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export default Header;
