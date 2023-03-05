/** @format */

import { ErrorMessage } from "../components/ErrorMessage";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { EditNote } from "../components/EditNote";
import { Note } from "../components/Note";
import { getSingleNoteService, editNoteService } from "../services/index";
import { AuthContext } from "../context/AuthContext";

export const EditNotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user, token } = useContext(AuthContext);
  const handleSubmit = async (data) => {
    try {
      await editNoteService(token, data.id, {
        tittle: data.tittle,
        category: data.category,
        text: data.text,
      });
      // Redirigir al usuario a la página de detalles de la nota
      window.location.href = `/noteInfo/${id}`;
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const note = await getSingleNoteService(id);
        setNote(note);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  if (loading) return <p>Cargando notas</p>;
  if (error) return <ErrorMessage message={error} />;

  return <EditNote note={note} onSubmit={handleSubmit} onError={setError} />;
};

