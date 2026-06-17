import { create } from "zustand";

type AppState = {
  selectedNodeId: string | null;

  setSelectedNodeId: (nodeId: string | null) => void;
};

export const useAppStore = create<AppState>((set) => ({
  selectedNodeId: null,

  setSelectedNodeId: (nodeId) =>
    set({
      selectedNodeId: nodeId,
    }),
}));
