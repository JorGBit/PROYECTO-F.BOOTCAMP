/** @format */
import { useEffect, useState } from "react";
import { getAllNotesService } from "../services";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);

        const data = await getAllNotesService();
        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, []);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  return { notes, loading, error, addNote };
};

export default useNotes;
