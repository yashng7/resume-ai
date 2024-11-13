"use client";

import { Button } from "@/components/ui/button";
import usePremiumModal from "@/hooks/usePremiumModal";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

interface CreateResumeButtonProps {
  canCreate: boolean;
}

export default function CreateResumeButton({
  canCreate,
}: CreateResumeButtonProps) {
  const premiumModal = usePremiumModal();

  if (canCreate) {
    return (
      <Button asChild className="" variant="outline">
        <Link href="/editor">
          <PlusSquare className="size-5" />
          New resume
        </Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={() => premiumModal.setOpen(true)}
      className=""
      variant="outline"
    >
      <PlusSquare className="size-5" />
      New resume
    </Button>
  );
}
