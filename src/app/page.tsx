import Header from "@/components/main/Header";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Header />
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
