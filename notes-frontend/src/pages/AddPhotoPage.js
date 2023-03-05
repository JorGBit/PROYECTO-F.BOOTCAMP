/** @format */
import useNotes from "../hooks/useNotes";
import { SendPhoto } from "../components/SendPhoto";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

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

          {<SendPhoto noteId={noteId} />}
        </>
      )}
    </section>
  );
};
