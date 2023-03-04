/** @format */

import { useEffect, useState } from "react";
import { getUserDataService } from "../services";

const useUser = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const user = await getUserDataService(id);

        setUser(user);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  return { user, loading, error };
};

export default useUser;
