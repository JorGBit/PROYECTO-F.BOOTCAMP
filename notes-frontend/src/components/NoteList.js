/** @format */
import { Note } from "./Note";
export const NoteList = ({ notes }) => {
  return notes.length ? (
    <ul>
      {notes.map((note) => (
        <li key={notes.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no notes yet...</p>
  );
};
