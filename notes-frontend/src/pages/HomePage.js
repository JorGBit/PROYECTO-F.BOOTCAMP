/** @format */
import useNotes from "../hooks/useNotes";
import { NoteList } from "../components/NoteList";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNote } from "../components/NewNote";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const { notes, loading, error, addNote } = useNotes();
  const { user } = useContext(AuthContext);
  console.log(user);
  if (loading) return <p>Cargando notas</p>;
  if (error) return <ErrorMessage message={error} />;
  //
  return (
    <section>
      {/* {user ? <NewNote addNote={addNote} /> : null} */}
      <h1>BIENVENIDO A CAT-NOTES</h1>
      <button>
        <Link to={`/noteList`}>NoteList</Link>
      </button>
      <button>
        <Link to={`/newNote`}>CreateNewNote</Link>
      </button>
      {/* <NoteList notes={notes} /> */}
    </section>
  );
};
