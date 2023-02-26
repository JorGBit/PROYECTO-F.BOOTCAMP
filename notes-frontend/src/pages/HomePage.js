/** @format */
import { ErrorMessage } from "../components/ErrorMessage";
import useNotes from "../hooks/useNotes";
// import { NoteList } from "../components/NoteList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";

export const HomePage = () => {
  const { notes, loading, error } = useNotes();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando notas</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <h1>Latest Notes</h1>
      {user ? <NewNote /> : null}
    </section>
  );
};
