import { create } from "zustand";

type InspectorTab = "config" | "runtime";

type AppState = {
  selectedAppId: string | null;

  selectedNodeId: string | null;

  isMobilePanelOpen: boolean;

  activeInspectorTab: InspectorTab;

  setSelectedAppId: (appId: string) => void;

  setSelectedNodeId: (nodeId: string | null) => void;

  setMobilePanelOpen: (open: boolean) => void;

  setActiveInspectorTab: (tab: InspectorTab) => void;
};

export const useAppStore = create<AppState>((set) => ({
  selectedAppId: "app-1",

  selectedNodeId: null,

  isMobilePanelOpen: false,

  activeInspectorTab: "config",

  setSelectedAppId: (appId) =>
    set({
      selectedAppId: appId,
    }),

  setSelectedNodeId: (nodeId) =>
    set({
      selectedNodeId: nodeId,
    }),

  setMobilePanelOpen: (open) =>
    set({
      isMobilePanelOpen: open,
    }),

  setActiveInspectorTab: (tab) =>
    set({
      activeInspectorTab: tab,
    }),
}));
