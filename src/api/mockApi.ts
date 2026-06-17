import type { Node, Edge } from "@xyflow/react";

type App = {
  id: string;
  name: string;
};

type Graph = {
  nodes: Node[];
  edges: Edge[];
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

const graphs: Record<string, Graph> = {
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
    nodes: [
      {
        id: "frontend",

        position: {
          x: 150,
          y: 100,
        },

        data: {
          label: "Frontend",
          status: "healthy",
          cpu: 1,
          memory: 512,
          usage: 20,
        },
      },

      {
        id: "product-service",

        position: {
          x: 500,
          y: 250,
        },

        data: {
          label: "Product Service",
          status: "degraded",
          cpu: 3,
          memory: 1024,
          usage: 60,
        },
      },
    ],

    edges: [
      {
        id: "frontend-product",
        source: "frontend",
        target: "product-service",
      },
    ],
  },
};

function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 700);
  });
}

export function getApps(): Promise<App[]> {
  return delay(apps);
}

export async function getGraph(appId: string): Promise<Graph> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  const shouldFail = Math.random() < 0.1;

  if (shouldFail) {
    throw new Error("Failed to load graph");
  }

  return (
    graphs[appId] ?? {
      nodes: [],
      edges: [],
    }
  );
}
