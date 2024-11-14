import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { Layout } from "lucide-react";

export const ResumeTemplates = {
  CLASSIC : "classic",
  MODERN : "modern",
  MINIMAL : "minimal",
  ELEGANT : "elegant",
  CREATIVE : "creative",
  PROFESSIONAL : "professional",
} as const

export type TemplateNames = typeof ResumeTemplates[keyof typeof ResumeTemplates];

interface TemplateButtonProps {
  template: TemplateNames | undefined;
  onChange: (template: TemplateNames) => void;
}

export default function TemplateButton({
  template,
  onChange,
}: TemplateButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          title="Change resume template"
        >
          <Layout className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {Object.values(ResumeTemplates).map((templateOption) => (
          <DropdownMenuItem
            key={templateOption}
            onClick={() => onChange(templateOption)}
            className={cn(
              "capitalize",
              template === templateOption && "bg-secondary",
            )}
          >
            {templateOption}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
