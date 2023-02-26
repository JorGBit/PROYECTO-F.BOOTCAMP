/** @format */

export const getAllNotesService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`);

  const json = await response.json();
  //AQUI ES POSIBLE QUE HAYA QUE AÑADIR UNA AUTORIZACIÓN

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getSingleNoteService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/noteInfo/${id}`
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
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

//ESTO ES POSIBLE QUE HAYA QUE MODIFICARLO  PARA QUE SOLICITE LA INFO DEL USUARIO.
// export const getMyUserDataService = async ({ token }) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_BACKEND}/noteInfo/:id`,
//     {
//       headers: {
//         Authorization: token,
//       },
//     }
//   );
//   const json = await response.json();
//   if (!response.ok) {
//     throw new Error(json.message);
//   }
//   return json.authToken;
// };

// export const getMyUserDataService = async ({ token }) => {
//   const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
//     headers: {
//       Authorization: token,
//     },
//   });

//   const json = await response.json();
//   if (!response.ok) {
//     throw new Error(json.message);
//   }
//   return json.authToken;
// };
