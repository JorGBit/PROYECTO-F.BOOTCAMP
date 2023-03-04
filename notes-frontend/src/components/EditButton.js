/** @format */

import React from "react";
import { Link } from "react-router-dom";

export const EditButton = ({ id }) => {
  return (
    <Link to={`/notesEdit/${id}`}>
      <button>Edit Note</button>
    </Link>
  );
};

export default EditButton;
