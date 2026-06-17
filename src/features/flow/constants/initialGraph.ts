import type { Node, Edge } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "api-service",

    position: {
      x: 100,
      y: 100,
    },

    data: {
      label: "API Service",
    },
  },

  {
    id: "auth-service",

    position: {
      x: 350,
      y: 100,
    },

    data: {
      label: "Auth Service",
    },
  },

  {
    id: "database",

    position: {
      x: 220,
      y: 300,
    },

    data: {
      label: "Database",
    },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "api-auth",

    source: "api-service",

    target: "auth-service",
  },

  {
    id: "auth-db",

    source: "auth-service",

    target: "database",
  },
];
