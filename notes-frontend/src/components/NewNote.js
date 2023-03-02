/** @format */

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNoteService } from "../services";
import { Link } from "react-router-dom";
export const NewNote = ({ addNote }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState();
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      const note = await sendNoteService({ data, token });
      addNote(note);
      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1>Crea una nota nueva</h1>
      <fieldset>
        <label htmlFor="tittle">Tittle</label>
        <input type="tittle" id="tittle" name="tittle" required />
      </fieldset>
      <fieldset>
        <label htmlFor="list">Category</label>
        <input type="category" id="category" name="category" />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" required />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{ width: "100px" }}
            />
          </figure>
        ) : null}
      </fieldset>
      <button>Send Note</button>
      {sending ? <p>Sending Note</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
