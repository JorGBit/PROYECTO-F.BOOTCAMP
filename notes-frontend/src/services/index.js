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

//ESTE SERVICIO DA INFORMACIÓN DE UNA NOTA CREADA

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

//ESTE SERVICIO REGISTRA UN NUEVO USUARIO
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

//ESTE SERVICIO LOGEA AL USUARIO
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

//ESTE SERVICIO OFRECE LA INFORMACIÓN DE USUARIO
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

//ESTE SERVICIO OFRECE LA INFORMACIÓN DE USUARIO
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

//ESTE SERVICIO ENVÍA UNA NOTA NUEVA A LA BASE DE DATOS
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

//ESTE SERVICIO ELIMINA UNA NOTA
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

//ESTE SERVICIO EDITA LA INFORMACIÓN EXISTENTE DE UNA NOTA
export const editNoteService = async (token, id, note) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notesEdit/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(note),
      headers: { "Content-Type": "application/json", Authorization: token },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.note;
};

// //ESTE SERVICIO SUBE UNA FOTO
// export const uploadPhotoService = async ({ file, noteId, token }) => {
//   const formData = new FormData();
//   formData.append("photo", file);

//   const response = await fetch(
//     `${process.env.REACT_APP_BACKEND}/notes/${noteId}/photo`,
//     {
//       method: "POST",
//       body: formData,
//       headers: {
//         Authorization: token,
//       },
//     }
//   );

//   const json = await response.json();
//   if (!response.ok) {
//     throw new Error(json.message);
//   }
//   return json.photo;
// };

export const uploadPhotoService = async ({ noteId, data, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notes/${noteId}/photo`,
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
  return json.photo;
};
