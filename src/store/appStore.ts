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

  selectedAppId: string;

  selectedNodeId: string | null;

  activeInspectorTab: InspectorTab;

  setNodes: (nodes: Node[]) => void;

  setEdges: (edges: Edge[]) => void;

  setSelectedNodeId: (id: string | null) => void;

  setSelectedAppId: (id: string) => void;

  setActiveInspectorTab: (tab: InspectorTab) => void;

  updateNodeData: (nodeId: string, data: Record<string, unknown>) => void;

  addNode: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  nodes: initialNodes,

  edges: initialEdges,

  selectedAppId: "payment-system",

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

  setSelectedAppId: (id) =>
    set({
      selectedAppId: id,
      selectedNodeId: null,
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

  addNode: () =>
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: crypto.randomUUID(),

          position: {
            x: 200,
            y: 200,
          },

          data: {
            label: "Service Node",
            status: "healthy",
            cpu: 1,
            memory: 256,
          },
        },
      ],
    })),
}));
