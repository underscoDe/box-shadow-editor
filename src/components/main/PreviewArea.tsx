"use client";

import { useShadow } from "@/contexts/shadow-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PreviewArea() {
  const { getCssString } = useShadow();
  const [previewType, setPreviewType] = useState<"button" | "card" | "modal">(
    "button"
  );

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <div className="flex gap-2 mb-8">
        <Button
          variant={previewType === "button" ? "default" : "outline"}
          size="sm"
          onClick={() => setPreviewType("button")}
        >
          Button
        </Button>
        <Button
          variant={previewType === "card" ? "default" : "outline"}
          size="sm"
          onClick={() => setPreviewType("card")}
        >
          Card
        </Button>
        <Button
          variant={previewType === "modal" ? "default" : "outline"}
          size="sm"
          onClick={() => setPreviewType("modal")}
        >
          Modal
        </Button>
      </div>

      <div className="relative flex items-center justify-center w-full h-64">
        {previewType === "button" && (
          <button
            className="px-6 py-3 bg-white dark:bg-gray-800 rounded-md"
            style={{ boxShadow: getCssString() }}
          >
            Preview Button
          </button>
        )}

        {previewType === "card" && (
          <div
            className="w-64 h-48 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center"
            style={{ boxShadow: getCssString() }}
          >
            Preview Card
          </div>
        )}

        {previewType === "modal" && (
          <div
            className="w-80 h-56 bg-white dark:bg-gray-800 rounded-md flex flex-col"
            style={{ boxShadow: getCssString() }}
          >
            <div className="border-b border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-medium">Modal Title</h3>
            </div>
            <div className="flex-1 p-4">Modal Content</div>
          </div>
        )}
      </div>
    </div>
  );
}
