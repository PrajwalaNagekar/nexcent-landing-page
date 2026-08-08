"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Button from "@/components/common/Button";
import { NavbarData } from "@/types/navbar";

interface MobileMenuProps {
  data: NavbarData;
}

export default function MobileMenu({
  data,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isOpen}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#263238] transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF4F] focus-visible:ring-offset-2"
      >
        {isOpen ? (
          <X
            size={24}
            aria-hidden="true"
          />
        ) : (
          <Menu
            size={24}
            aria-hidden="true"
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-[#F5F7FA] shadow-md">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto w-full max-w-[1230px] px-5 py-6 sm:px-8"
          >
            <ul className="flex flex-col gap-5">
              {data.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-[14px] font-medium leading-[20px] text-[#263238] transition-colors hover:text-[#4CAF4F]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={data.actions.login.href}
                onClick={closeMenu}
                className="block"
              >
                <Button
                  variant="secondary"
                  className="w-full"
                >
                  {data.actions.login.label}
                </Button>
              </Link>

              <Link
                href={data.actions.signup.href}
                onClick={closeMenu}
                className="block"
              >
                <Button className="w-full">
                  {data.actions.signup.label}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}