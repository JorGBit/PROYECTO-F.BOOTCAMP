/** @format */
import { ErrorMessage } from "../components/ErrorMessage";
import useNotes from "../hooks/useNotes";
import { NoteList } from "../components/NoteList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";

export const HomePage = () => {
  const { notes, loading, error, addNote } = useNotes();
  const { user } = useContext(AuthContext);

  // if (loading) return <p>Cargando notas</p>;
  // if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <h1>HOLA SOY UNA SECCIÓN H1</h1>
      {user ? <NewNote addNote={addNote} /> : null}

      <NoteList notes={notes} />
    </section>
  );
};
