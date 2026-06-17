import type { Node, Edge } from "@xyflow/react";

type App = {
  id: string;
  name: string;
};

const apps: App[] = [
  {
    id: "payment-system",
    name: "Payment System",
  },
  {
    id: "ecommerce-api",
    name: "Ecommerce API",
  },
];

const graphs: Record<
  string,
  {
    nodes: Node[];
    edges: Edge[];
  }
> = {
  "payment-system": {
    nodes: [
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
          usage: 40,
        },
      },

      {
        id: "auth-service",
        position: {
          x: 450,
          y: 150,
        },
        data: {
          label: "Auth Service",
          status: "healthy",
          cpu: 1,
          memory: 256,
          usage: 30,
        },
      },

      {
        id: "database",
        position: {
          x: 300,
          y: 350,
        },
        data: {
          label: "Database",
          status: "warning",
          cpu: 4,
          memory: 2048,
          usage: 70,
        },
      },
    ],

    edges: [
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
    ],
  },

  "ecommerce-api": {
    nodes: [],
    edges: [],
  },
};

function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 700);
  });
}

export function getApps() {
  return delay(apps);
}

export function getGraph(appId: string) {
  return delay(graphs[appId]);
}
