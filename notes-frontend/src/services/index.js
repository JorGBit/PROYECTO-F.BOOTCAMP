/** @format */

export const getAllNotesService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.notes;
};

export const getSingleNoteService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/noteInfo/${id}`
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.noteInfo;
};

export const registerUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.authToken;
};

export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.user;
};

export const getUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.user;
};

export const sendNoteService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/new`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const sendPhotoService = async ({ id, photo, token, data }) => {
  const formData = new FormData();
  formData.append("photo", photo);

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notes/${id}/photo`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const deleteNoteService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

// export const updateNoteService = async (id, token, note) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_BACKEND}/notesEdit/${id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify(note),
//     }
//   );
//   const json = await response.json();
//   if (!response.ok) {
//     throw new Error(json.message);
//   }
//   return json.note;
// };
export const updateNoteService = async ({ note, token, id }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notesEdit/${id}`,
    {
      method: "PUT",
      body: note,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.note;
};

//PRUEBAS PARA INCLUIR FOTO

export const getPhotoById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/note/${id}/photo/`
    );
    const photo = await response.json();
    return photo;
  } catch (error) {
    console.error(error.message);
  }
};
