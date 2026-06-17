import { useEffect } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";

import { useAppStore } from "@/store/appStore";

import "@xyflow/react/dist/style.css";

export function FlowCanvas() {
  const nodes = useAppStore((state) => state.nodes);

  const edges = useAppStore((state) => state.edges);

  const setNodes = useAppStore((state) => state.setNodes);

  const setEdges = useAppStore((state) => state.setEdges);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Delete" || event.key === "Backspace") {
        if (!selectedNodeId) {
          return;
        }

        const updatedNodes = nodes.filter((node) => node.id !== selectedNodeId);

        const updatedEdges = edges.filter(
          (edge) =>
            edge.source !== selectedNodeId && edge.target !== selectedNodeId,
        );

        setNodes(updatedNodes);

        setEdges(updatedEdges);

        setSelectedNodeId(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNodeId, nodes, edges, setNodes, setEdges, setSelectedNodeId]);

  return (
    <div className="flex-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onPaneClick={() => {
          setSelectedNodeId(null);
        }}
        onNodesChange={(changes) => {
          setNodes(applyNodeChanges(changes, nodes));
        }}
        onEdgesChange={(changes) => {
          setEdges(applyEdgeChanges(changes, edges));
        }}
        onNodeClick={(_, node) => {
          setSelectedNodeId(node.id);
        }}
        fitView
      >
        <Background />

        <Controls />
      </ReactFlow>
    </div>
  );
}
