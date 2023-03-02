/** @format */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService } from "../services";
//
export const Note = ({ note, removeNote }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(note);
  console.log(user);

  if (!user) return <p>loading</p>;

  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });
      if (removeNote) {
        removeNote(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <h2>Título:</h2>
      <p> {note.tittle}</p>
      <h2>Categoría:</h2> <p>{note.category}</p>
      <h2>Texto: </h2>
      <p>{note.text}</p>
      {note.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/static/notasImagen/${note.image}`}
          alt={note.text}
        />
      ) : null}
      <p>
        By <Link to={`/users`}>{user.email}</Link> on{""}
        <Link to={`/noteInfo/${note.id}`}>
          {new Date(note.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === note.idUser ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) deleteNote(note.id);
            }}>
            Detele Note
          </button>{" "}
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
