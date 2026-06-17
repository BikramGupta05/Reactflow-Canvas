import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAppStore } from "@/store/appStore";

export function ServiceNodeInspector() {
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const nodes = useAppStore((state) => state.nodes);

  const activeTab = useAppStore((state) => state.activeInspectorTab);

  const setActiveTab = useAppStore((state) => state.setActiveInspectorTab);
  const updateNodeData = useAppStore((state) => state.updateNodeData);

  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  if (!selectedNode) {
    return (
      <div className="p-4 text-sm text-muted-foreground">Select a node</div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{selectedNode.data.label as string}</h2>

        <Badge>{selectedNode.data.status as string}</Badge>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "config" | "runtime")}
      >
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="config">Config</TabsTrigger>

          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>

        <TabsContent value="config">
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-sm">CPU Cores</label>

              <input
                className="border rounded-md px-2 py-1 w-full"
                type="number"
                value={selectedNode.data.cpu as number}
                onChange={(event) =>
                  updateNodeData(selectedNode.id, {
                    cpu: Number(event.target.value),
                  })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm">Memory (MB)</label>

              <input
                className="border rounded-md px-2 py-1 w-full"
                type="number"
                value={selectedNode.data.memory as number}
                onChange={(event) =>
                  updateNodeData(selectedNode.id, {
                    memory: Number(event.target.value),
                  })
                }
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="runtime">
          <p className="text-sm text-muted-foreground">
            CPU: {selectedNode.data.cpu as number} cores
          </p>

          <p className="text-sm text-muted-foreground">
            Memory: {selectedNode.data.memory as number} MB
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
