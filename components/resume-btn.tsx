"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
export function DownloadResumeButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-40 sm:w-auto px-4 py-2 text-sm sm:text-lg"
      asChild
    >
      <a href="/Shubham-Pawar-DA-Resume.pdf" target="_blank" rel="noopener noreferrer" download>
        <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
        My Resume
      </a>
    </Button>
  );
}
