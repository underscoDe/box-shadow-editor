import { Button } from "@/components/ui/button";
import { FileCode, Save, Share2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 shrink-0">
          <div>
            <h1 className="text-xl font-bold">Shadow Editor</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-1 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
            >
              <FileCode className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </header>
        <section className="flex flex-1 overflow-hidden">
          <div className="w-60 border-r border-gray-200 dark:border-gray-800 overflow-y-auto hidden md:block shrink-0">
            Left panel
          </div>
          <div className="flex-1 overflow-auto">
            <div className="h-full flex items-center justify-center p-4">
              Preview Zone
            </div>
          </div>
          <div className="w-80 border-l border-gray-200 dark:border-gray-800 overflow-y-auto hidden md:block shrink-0">
            <div className="p-4">Right Panel (Controls)</div>
          </div>
        </section>
        <footer className="h-24 border-t border-gray-200 dark:border-gray-800 shrink-0">
          <div className="p-4">Footer</div>
        </footer>
      </section>
    </main>
  );
}
