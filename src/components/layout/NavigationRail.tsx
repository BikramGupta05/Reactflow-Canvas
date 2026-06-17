import { useAppStore } from "@/store/appStore";

export function NavigationRail() {
  const addNode = useAppStore((state) => state.addNode);

  return (
    <aside className="w-16 border-r flex flex-col items-center gap-4 py-4">
      <button onClick={addNode} title="Add service">
        ➕
      </button>

      <button>⚙️</button>

      <button>📊</button>
    </aside>
  );
}
