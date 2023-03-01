/** @format */
import { Note } from "./Note";
export const NoteList = ({ notes, removeNote }) => {
  console.log(notes);
  return notes && notes.length ? (
    <ul>
      {notes.map((note) => (
        <li key={notes.id}>
          <Note note={note} removeNote={removeNote} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no notes yet...</p>
  );
};
