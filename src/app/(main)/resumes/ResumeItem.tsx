"use client";

import { useState, useRef, useTransition } from "react";
import Link from "next/link";
import { formatDate } from "date-fns";
import { useReactToPrint } from "react-to-print";
import { MoreVertical, Printer, Trash2, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ResumeServerData } from "@/lib/types";
import { mapToResumeValues } from "@/lib/utils";
import { deleteResume } from "./actions";
import ResumePreview from "@/components/ResumePreview";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumeItemProps {
  resume: ResumeServerData;
}

export default function ResumeItem({ resume }: ResumeItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resume.title || "Resume",
  });

  const wasUpdated = resume.updatedAt !== resume.createdAt;

  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span className="line-clamp-1 text-lg">
            Name: {resume.title || "No title"}
          </span>
          <MoreMenu
            resumeId={resume.id}
            onPrintClick={reactToPrintFn}
            onDeleteClick={() => setShowDeleteConfirmation(true)}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between">
          {resume.description && (
            <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
              Description: {resume.description.charAt(0).toUpperCase() + resume.description.slice(1)}
            </p>
          )}
          {resume.template && (
            <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
              Template Style: {resume.template.charAt(0).toUpperCase() + resume.template.slice(1)}
            </p>
          )}
        </div>
        <div className="relative">
          <ResumePreview
            resumeData={mapToResumeValues(resume)}
            contentRef={contentRef}
            className="h-72 overflow-hidden rounded-md shadow-sm transition-shadow group-hover:shadow-md"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        <p className="text-xs text-muted-foreground">
          {wasUpdated ? "Updated" : "Created"} on{" "}
          {formatDate(resume.updatedAt, "MMM d, yyyy h:mm a")}
        </p>
        <Button asChild variant="secondary" size="sm">
          <Link href={`/editor?resumeId=${resume.id}`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </Button>
      </CardFooter>
      <DeleteConfirmationDialog
        resumeId={resume.id}
        open={showDeleteConfirmation}
        onOpenChange={setShowDeleteConfirmation}
      />
    </Card>
  );
}

interface MoreMenuProps {
  resumeId: string;
  onPrintClick: () => void;
  onDeleteClick: () => void;
}

function MoreMenu({ resumeId, onPrintClick, onDeleteClick }: MoreMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onDeleteClick}>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onPrintClick}>
          <Printer className="mr-2 h-4 w-4" />
          <span>Print</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface DeleteConfirmationDialogProps {
  resumeId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function DeleteConfirmationDialog({
  resumeId,
  open,
  onOpenChange,
}: DeleteConfirmationDialogProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  async function handleDelete() {
    startTransition(async () => {
      try {
        await deleteResume(resumeId);
        onOpenChange(false);
        toast({
          title: "Resume deleted",
          description: "Your resume has been successfully deleted.",
        });
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete resume?</DialogTitle>
          <DialogDescription>
            This will permanently delete this resume. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <LoadingButton
            variant="destructive"
            onClick={handleDelete}
            loading={isPending}
          >
            Delete
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
