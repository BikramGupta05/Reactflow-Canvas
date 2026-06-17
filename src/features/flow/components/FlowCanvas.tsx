import { useEffect } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";

import { useAppStore } from "@/store/appStore";

import { useGraph } from "@/features/apps/hooks/useGraph";

import "@xyflow/react/dist/style.css";

export function FlowCanvas() {
  const nodes = useAppStore((state) => state.nodes);

  const edges = useAppStore((state) => state.edges);

  const selectedAppId = useAppStore((state) => state.selectedAppId);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const setNodes = useAppStore((state) => state.setNodes);

  const setEdges = useAppStore((state) => state.setEdges);

  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  const { data, isLoading, isError } = useGraph(selectedAppId);

  useEffect(() => {
    if (!data) {
      return;
    }

    setNodes(data.nodes);

    setEdges(data.edges);

    setSelectedNodeId(null);
  }, [data, setNodes, setEdges, setSelectedNodeId]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;

      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      if (event.key === "Delete" || event.key === "Backspace") {
        if (!selectedNodeId) {
          return;
        }

        setNodes(nodes.filter((node) => node.id !== selectedNodeId));

        setEdges(
          edges.filter(
            (edge) =>
              edge.source !== selectedNodeId && edge.target !== selectedNodeId,
          ),
        );

        setSelectedNodeId(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNodeId, nodes, edges, setNodes, setEdges, setSelectedNodeId]);

  if (isLoading) {
    return (
      <div className="flex-1 grid place-items-center">Loading graph...</div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 grid place-items-center">Failed to load graph</div>
    );
  }

  return (
    <div className="flex-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) => setNodes(applyNodeChanges(changes, nodes))}
        onEdgesChange={(changes) => setEdges(applyEdgeChanges(changes, edges))}
        onNodeClick={(_, node) => {
          setSelectedNodeId(node.id);
        }}
        onPaneClick={() => {
          setSelectedNodeId(null);
        }}
        fitView
      >
        <Background />

        <Controls />
      </ReactFlow>
    </div>
  );
}
