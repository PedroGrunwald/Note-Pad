import { useState } from "react";
import logo from "./assets/Logo.svg";
import { NewNoteCard } from "./components/New-note-card";
import { Notecard } from "./components/Note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, SetNotes] = useState<Note[]>([]); // <Note> ele vai ter o formato da interface tipada acima. 

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };
    SetNotes([newNote, ...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 "
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes.map((note) => {
          return <Notecard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
