/** @format */
import useNotes from "../hooks/useNotes";
// import { NoteList } from "../components/NoteList";
import { useState } from "react";
import { useContext } from "react";
import SendPhoto from "../components/SendPhoto";
import { AuthContext } from "../context/AuthContext";

export const AddPhotoPage = () => {
  const [noteId, setNoteId] = useState(null);

  const { loading, error } = useNotes();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando notas</p>;
  //if (error) return <ErrorMessage message={error} />;
  if (error) return <p>Hubo un error: {error}</p>;

  return (
    <section>
      {user && (
        <>
          <h1>Add Photo to Note</h1>
          {/* <NoteList handleNoteSelection={handleNoteSelection} /> */}
          {<SendPhoto noteId={noteId} />}
        </>
      )}
    </section>
  );
};

export default AddPhotoPage;
