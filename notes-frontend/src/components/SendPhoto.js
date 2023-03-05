* @format */

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { uploadPhotoService } from "../services/index";

export const SendPhoto = ({ noteId }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData();
      data.append("image", image);

      await uploadPhotoService({ data, noteId, token });
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
      <button>Send Image</button>
      {sending ? <p>Sending Image</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};

