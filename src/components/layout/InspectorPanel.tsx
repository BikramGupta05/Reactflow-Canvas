import { useAppStore } from "@/store/appStore";

export function InspectorPanel() {
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  return (
    <aside className="w-80 border-l p-4">
      <h2 className="font-medium">Inspector</h2>

      <p className="text-sm text-muted-foreground">
        Selected: {selectedNodeId ?? "None"}
      </p>
    </aside>
  );
}
