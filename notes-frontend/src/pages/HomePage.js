/** @format */
import useNotes from "../hooks/useNotes";
import { NoteList } from "../components/NoteList";
// import { ErrorMessage } from "../components/ErrorMessage";
import { NewNote } from "../components/NewNote";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {
  const { notes, loading, error, addNote } = useNotes();
  const { user } = useContext(AuthContext);

  // if (loading) return <p>Cargando notas</p>;
  // if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {/* {user ? <NewNote addNote={addNote} /> : null} */}
      <h1>HOMEPAGE</h1>
      <h2>Volver a la lista de notas..esto será un botón</h2>
      {/* <NoteList notes={notes} /> */}
    </section>
  );
};
