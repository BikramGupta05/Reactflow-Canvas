import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";

import { useAppStore } from "@/store/appStore";

import { ConfigTab } from "./ConfigTab";

import { RuntimeTab } from "./RuntimeTab";

export function ServiceNodeInspector() {
  const activeTab = useAppStore((state) => state.activeInspectorTab);

  const setActiveTab = useAppStore((state) => state.setActiveInspectorTab);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Service Node</h2>

        <Badge>Healthy</Badge>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value as "config" | "runtime");
        }}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="config">Config</TabsTrigger>

          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>

        <TabsContent value="config">
          <ConfigTab />
        </TabsContent>

        <TabsContent value="runtime">
          <RuntimeTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
