/** @format */
import useNotes from "../hooks/useNotes";
import { NoteList } from "../components/NoteList";
import { NewNote } from "../components/NewNote";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NewNotePage = () => {
  const { notes, loading, error, addNote, removeNote } = useNotes();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando notas</p>;

  if (error) return <p>Hubo un error: {error}</p>;

  return <section>{user ? <NewNote addNote={addNote} /> : null}</section>;
};
