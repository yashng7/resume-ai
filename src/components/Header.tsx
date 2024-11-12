"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { CreditCard, Menu } from 'lucide-react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const user = useUser();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/resumes", label: user.isSignedIn ? "Dashboard" : "Get Started" },
  ];

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-950 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"
        >
          ResumeAI
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
            >
              {item.label}
            </Link>
          ))}
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
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <div className="flex flex-col space-y-4 mt-4 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <SheetFooter className="mt-auto">
                <div className="flex justify-between space-x-4">
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
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

