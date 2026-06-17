import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4">
      <h1 className="font-semibold">App Graph Builder</h1>

      <div className="flex gap-2">
        <Button variant="outline">Fit</Button>

        <Button>Deploy</Button>
      </div>
    </header>
  );
}
