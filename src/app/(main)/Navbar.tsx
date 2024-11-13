"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link
          href="/"
          className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"
        >
          ResumeAI
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/resumes"
            className={`text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 ${pathname === "/resumes" ? "hidden" : ""} `}
          >
            Dashboard
          </Link>
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
