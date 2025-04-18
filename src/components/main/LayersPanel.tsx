"use client";

import { Eye, EyeOff, Trash2, RotateCcw, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShadow } from "@/contexts/shadow-context";
import { useState } from "react";

export default function LayersPanel() {
  const { resetShadow } = useShadow();
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4 w-full h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-base">Layers</h2>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-blue-500">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 flex items-center justify-between mb-2">
        <span className="text-sm">Shadow 1</span>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-gray-500 hover:text-red-500"
            onClick={() => {
              resetShadow();
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 mt-4 w-full"
        onClick={resetShadow}
      >
        <RotateCcw className="h-3 w-3" />
        <span>Reset to default</span>
      </Button>
    </div>
  );
}
