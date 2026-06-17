import { AppSelector } from "@/features/apps/components/AppSelector";

import { ServiceNodeInspector } from "./ServiceNodeInspector";

export function InspectorPanel() {
  return (
    <aside className="w-80 border-l">
      <AppSelector />

      <ServiceNodeInspector />
    </aside>
  );
}
