export function Notecard() {
  return (
    <button className="roundend-md text-left space-y-3 p-5 overflow-hidden relative bg-slate-800 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none ">
      <span className="text-sm font-medium text-slate-200">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ut vel. Est molestias voluptates accusamus iste animi deserunt! Animi sed excepturi natus voluptate.</p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
