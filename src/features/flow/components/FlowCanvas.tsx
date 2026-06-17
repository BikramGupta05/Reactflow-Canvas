import { useEffect } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import { useAppStore } from "@/store/appStore";

import "@xyflow/react/dist/style.css";

import { initialNodes, initialEdges } from "../constants/initialGraph";

export function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Delete" || event.key === "Backspace") {
        if (!selectedNodeId) {
          return;
        }

        setNodes((currentNodes) =>
          currentNodes.filter((node) => node.id !== selectedNodeId),
        );

        setEdges((currentEdges) =>
          currentEdges.filter(
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
  }, [selectedNodeId, setNodes, setEdges, setSelectedNodeId]);

  return (
    <div className="flex-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
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
