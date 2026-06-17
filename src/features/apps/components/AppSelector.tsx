import { Button } from "@/components/ui/button";

import { useApps } from "../hooks/useApps";

import { useAppStore } from "@/store/appStore";

export function AppSelector() {
  const { data: apps, isLoading, isError } = useApps();

  const selectedAppId = useAppStore((state) => state.selectedAppId);

  const setSelectedAppId = useAppStore((state) => state.setSelectedAppId);

  if (isLoading) {
    return <div className="p-4 text-sm">Loading apps...</div>;
  }

  if (isError) {
    return <div className="p-4 text-sm text-red-500">Failed to load apps</div>;
  }

  return (
    <div className="p-4 border-b space-y-3">
      <h2 className="font-semibold">Applications</h2>

      <div className="space-y-2">
        {apps?.map((app) => (
          <Button
            key={app.id}
            variant={selectedAppId === app.id ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => setSelectedAppId(app.id)}
          >
            {app.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
