/** @format */

// /** @format */
// import { Note } from "./Note";
// export const NoteList = ({ notes, removeNote }) => {
//   console.log(notes);
//   return notes && notes.length ? (
//     <ul>
//       {notes.map((note) => (
//         <li key={notes.id}>
//           <Note note={note} removeNote={removeNote} />
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p>There are no notes yet...</p>
//   );
// };

import { Link } from 'react-router-dom';
import { Note } from './Note';

export const NoteList = ({ notes, removeNote }) => {
    console.log(notes);
    return notes && notes.length ? (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <h2>{note.tittle}</h2>

                    <Link to={`/noteInfo/${note.id}`}>
                        <button className="btn_openNot">Open note</button>
                    </Link>
                </li>
            ))}
        </ul>
    ) : (
        <p>There are no notes yet...</p>
    );
};
