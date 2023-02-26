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

  return { notes, loading, error };
};

export default useNotes;
