import { useState } from "react";

export default function AddFollowUp({ onAdd }) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.trim()) return;

    onAdd(note);     
    setNote("");     
  };

  return (
    <>
      <h4>Add Follow-up</h4>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Follow-up note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button className="btn-primary" type="submit">
          Add Follow-up
        </button>
      </form>
    </>
  );
}
