/** @format */
import useNotes from "../hooks/useNotes";
import { NoteList } from "../components/NoteList";
// import { ErrorMessage } from "../components/ErrorMessage";
import { NewNote } from "../components/NewNote";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NoteListPage = () => {
  const { notes, loading, error, addNote, removeNote } = useNotes();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando notas</p>;
  //if (error) return <ErrorMessage message={error} />;
  if (error) return <p>Hubo un error: {error}</p>;

  return (
    <section>
      <h1>
        <button>CreateNewNote</button>
      </h1>
      <h2>
        Aquí va la lista de notas...hay que separarla del formulario de crear
        nueva nota{" "}
      </h2>
      <NoteList notes={notes} removeNote={removeNote} />
    </section>
  );
};
