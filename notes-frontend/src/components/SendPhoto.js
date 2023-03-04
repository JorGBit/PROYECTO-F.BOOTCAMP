/** @format */

import { sendPhotoService } from "../services/index";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

export const AddImageForm = ({ noteId }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    try {
      setSending(true);

      const data = new FormData(e.target);
      const note = await sendPhotoService({ data, token });
      noteId(note);
      const formData = new FormData();

      formData.append("photo", image);
      const result = await sendPhotoService({ data: formData, noteId });
      console.log(result);
    } catch (error) {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Add Image</h3>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default AddImageForm;
