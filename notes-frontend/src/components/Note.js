/** @format */

// /** @format */

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { deleteNoteService } from "../services";
// //
// export const Note = ({ note, removeNote }) => {
//   const navigate = useNavigate();
//   const { user, token } = useContext(AuthContext);
//   const [error, setError] = useState("");

//   console.log(note);
//   console.log(user);

//   if (!user) return <p>loading</p>;

//   const deleteNote = async (id) => {
//     try {
//       await deleteNoteService({ id, token });
//       if (removeNote) {
//         removeNote(id);
//       } else {
//         navigate("/noteList");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <article>
//       <h2>Título:</h2>
//       <p> {note.tittle}</p>
//       <h2>Categoría:</h2> <p>{note.category}</p>
//       <h2>Texto: </h2>
//       <p>{note.text}</p>
//       {note.image ? (
//         <img
//           src={`${process.env.REACT_APP_BACKEND}/static/notasImagen/${note.image}`}
//           alt={note.text}
//         />
//       ) : null}
//       <p>
//         By <Link to={`/users`}>{user.email}</Link> on{""}
//         <Link to={`/noteInfo/${note.id}`}>
//           {new Date(note.created_at).toLocaleString()}
//         </Link>
//       </p>
//       {user && user.id === note.idUser ? (
//         <section>
//           <button
//             onClick={() => {
//               if (window.confirm("Are you sure?")) deleteNote(note.id);
//             }}>
//             Detele Note
//           </button>{" "}
//           <button onClick={() => navigate(`/notesEdit/${note.id}`)}>
//             Edit Note
//           </button>{" "}
//           {error ? <p>{error}</p> : null}
//         </section>
//       ) : null}
//     </article>
//   );
// };

// OTRA VERSION

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { deleteNoteService } from "../services";
// import EditNoteButton from "./EditButton";

// export const Note = ({ note, removeNote }) => {
//   const navigate = useNavigate();
//   const { user, token } = useContext(AuthContext);
//   const [error, setError] = useState("");

//   if (!user) return <p>loading</p>;

//   const deleteNote = async (id) => {
//     try {
//       await deleteNoteService({ id, token });
//       if (removeNote) {
//         removeNote(id);
//       } else {
//         navigate("/noteList");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <article>
//       <h2>Título:</h2>
//       <p> {note.tittle}</p>
//       <h2>Categoría:</h2> <p>{note.category}</p>
//       <h2>Texto: </h2>
//       <p>{note.text}</p>
//       {note.image ? (
//         <img
//           src={`${process.env.REACT_APP_BACKEND}/static/notasImagen/${note.image}`}
//           alt={note.text}
//         />
//       ) : null}
//       <p>
//         By <Link to={`/users`}>{user.email}</Link> on{""}
//         <Link to={`/noteInfo/${note.id}`}>
//           {new Date(note.created_at).toLocaleString()}
//         </Link>
//       </p>
//       {user && user.id === note.idUser ? (
//         <section>
//           <button
//             onClick={() => {
//               if (window.confirm("Are you sure?")) deleteNote(note.id);
//             }}>
//             Detele Note
//           </button>{" "}
//           <EditNoteButton id={note.id} />
//           {error ? <p>{error}</p> : null}
//         </section>
//       ) : null}
//     </article>
//   );
// };

//OTRA VERSION

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { deleteNoteService } from '../services';
import EditNoteButton from './EditButton';

export const Note = ({ note, removeNote }) => {
    const navigate = useNavigate();
    const { user, token } = useContext(AuthContext);
    const [error, setError] = useState('');

    if (!user) return <p>loading</p>;

    const deleteNote = async (id) => {
        try {
            await deleteNoteService({ id, token });
            if (removeNote) {
                removeNote(id);
            } else {
                navigate('/noteList');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <article>
            <h2>
                Título: <span>{note.tittle}</span>{' '}
            </h2>
            <h2>
                Categoría:{' '}
                <span className={`category--${note.category}`}>
                    {note.category}
                </span>
            </h2>

            <h2>
                Texto: <span>{note.text}</span>{' '}
            </h2>
            <h2>
                Foto: <span>{note.photo}</span>
            </h2>

            {note.image ? (
                <img
                    src={`${process.env.REACT_APP_BACKEND}/static/notasImagen/${note.image}`}
                    alt={note.text}
                />
            ) : null}
            <span>
                By <Link to={`/users`}>{user.email}</Link> on{''}
                <Link to={`/noteInfo/${note.id}`}>
                    {new Date(note.created_at).toLocaleString()}
                </Link>
            </span>
            {user && user.id === note.idUser ? (
                <section>
                    <button
                        onClick={() => {
                            if (window.confirm('Are you sure?'))
                                deleteNote(note.id);
                        }}
                    >
                        Detele Note
                    </button>{' '}
                    <EditNoteButton id={note.id} />
                    <Link to={`/notes/${note.id}/photo`}>
                        <button>Add Photo</button>
                    </Link>
                    {error ? <p>{error}</p> : null}
                </section>
            ) : null}
        </article>
    );
};
