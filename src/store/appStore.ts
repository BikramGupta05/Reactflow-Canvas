import { create } from "zustand";
import type { Node, Edge } from "@xyflow/react";

import {
  initialNodes,
  initialEdges,
} from "@/features/flow/constants/initialGraph";

type InspectorTab = "config" | "runtime";

type AppStore = {
  nodes: Node[];

  edges: Edge[];

  selectedNodeId: string | null;

  activeInspectorTab: InspectorTab;

  setNodes: (nodes: Node[]) => void;

  setEdges: (edges: Edge[]) => void;

  setSelectedNodeId: (id: string | null) => void;

  setActiveInspectorTab: (tab: InspectorTab) => void;

  updateNodeData: (nodeId: string, data: Record<string, unknown>) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  nodes: initialNodes,

  edges: initialEdges,

  selectedNodeId: null,

  activeInspectorTab: "config",

  setNodes: (nodes) =>
    set({
      nodes,
    }),

  setEdges: (edges) =>
    set({
      edges,
    }),

  setSelectedNodeId: (id) =>
    set({
      selectedNodeId: id,
    }),

  setActiveInspectorTab: (tab) =>
    set({
      activeInspectorTab: tab,
    }),

  updateNodeData: (nodeId, data) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,

              data: {
                ...node.data,
                ...data,
              },
            }
          : node,
      ),
    })),
}));
