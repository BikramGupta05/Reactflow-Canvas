import { AppHeader } from "@/components/layout/AppHeader";

import { NavigationRail } from "@/components/layout/NavigationRail";

import { InspectorPanel } from "@/components/layout/InspectorPanel";

import { FlowCanvas } from "@/features/flow/components/FlowCanvas";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AppHeader />

      <div className="flex flex-1">
        <NavigationRail />

        <FlowCanvas />

        <InspectorPanel />
      </div>
    </div>
  );
}

export default App;
