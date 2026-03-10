export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h1 className="text-xl font-semibold">Figma handoff project</h1>
        <p className="mt-3 text-sm text-neutral-300">
          This project contains a runnable React + Vite + Tailwind scaffold.
        </p>
        <p className="mt-2 text-sm text-neutral-400">
          Use the files in <code>screens/home</code> as the source of truth to rebuild the UI.
        </p>
      </div>
    </div>
  )
}