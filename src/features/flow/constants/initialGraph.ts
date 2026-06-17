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
      status: "healthy",
      cpu: 2,
      memory: 512,
    },
  },
  {
    id: "auth-service",
    position: {
      x: 150,
      y: 150,
    },
    data: {
      label: "Auth Service",
      status: "healthy",
      cpu: 1,
      memory: 256,
    },
  },
  {
    id: "database",
    position: {
      x: 100,
      y: 100,
    },
    data: {
      label: "Database",
      status: "warning",
      cpu: 4,
      memory: 2048,
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
