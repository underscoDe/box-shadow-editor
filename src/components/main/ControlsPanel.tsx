"use client";

import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useShadow } from "@/contexts/shadow-context";
import { Button } from "../ui/button";

export default function ControlsPanel() {
  const { shadow, updateShadow } = useShadow();

  return (
    <div className="px-2 py-4 space-y-6 w-full">
      <div>
        <h3 className="font-medium text-base mb-4">Offset</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="offsetX">X</Label>
            <div className="flex items-center">
              <Input
                id="offsetX"
                type="number"
                value={shadow.offsetX}
                onChange={(e) =>
                  updateShadow("offsetX", parseInt(e.target.value) || 0)
                }
                className="w-full"
              />
              <button className="px-2 ml-2 bg-gray-100 dark:bg-gray-800 rounded">
                <span className="text-sm">px</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="offsetY">Y</Label>
            <div className="flex items-center">
              <Input
                id="offsetY"
                type="number"
                value={shadow.offsetY}
                onChange={(e) =>
                  updateShadow("offsetY", parseInt(e.target.value) || 0)
                }
                className="w-full"
              />
              <button className="px-2 ml-2 bg-gray-100 dark:bg-gray-800 rounded">
                <span className="text-sm">px</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-base mb-4">Blur & Spread</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="blurRadius">Blur</Label>
            <div className="flex items-center">
              <Input
                id="blurRadius"
                type="number"
                value={shadow.blurRadius}
                onChange={(e) =>
                  updateShadow("blurRadius", parseInt(e.target.value) || 0)
                }
                className="w-full"
              />
              <button className="px-2 ml-2 bg-gray-100 dark:bg-gray-800 rounded">
                <span className="text-sm">px</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="spreadRadius">Spread</Label>
            <div className="flex items-center">
              <Input
                id="spreadRadius"
                type="number"
                value={shadow.spreadRadius}
                onChange={(e) =>
                  updateShadow("spreadRadius", parseInt(e.target.value) || 0)
                }
                className="w-full"
              />
              <button className="px-2 ml-2 bg-gray-100 dark:bg-gray-800 rounded">
                <span className="text-sm">px</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-base mb-4">Color</h3>
        <div className="flex gap-2 items-center">
          <div
            className="w-8 h-8 rounded border border-gray-300 dark:border-gray-600"
            style={{ backgroundColor: shadow.color }}
          />
          <div className="flex-1 relative">
            <Input
              type="text"
              value={shadow.color}
              onChange={(e) => updateShadow("color", e.target.value)}
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6"
            >
              <Pencil className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <Label className="mb-2 block">Opacity</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[shadow.opacity * 100]}
              min={0}
              max={100}
              step={1}
              onValueChange={(values) =>
                updateShadow("opacity", values[0] / 100)
              }
              className="flex-1"
            />
            <span className="text-sm w-8 text-right">
              {Math.round(shadow.opacity * 100)}%
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="inset-mode">Inset Shadow</Label>
        <Switch
          id="inset-mode"
          checked={shadow.inset}
          onCheckedChange={(checked) => updateShadow("inset", checked)}
        />
      </div>
    </div>
  );
}
