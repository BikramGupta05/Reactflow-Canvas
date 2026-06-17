import { useAppStore } from "@/store/appStore";

import { ServiceNodeInspector } from "./ServiceNodeInspector";

export function InspectorPanel() {
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  return (
    <aside className="w-80 border-l p-4">
      {selectedNodeId ? (
        <ServiceNodeInspector />
      ) : (
        <p className="text-sm text-muted-foreground">Select a node</p>
      )}
    </aside>
  );
}
