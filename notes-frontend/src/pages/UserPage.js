/** @format */
// /** @format */
// import { useParams } from "react-router-dom";
// import { ErrorMessage } from "../components/ErrorMessage";
// import useUser from "../hooks/useUser";

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export const UserPage = () => {
//   const { loading, error } = useUser();
//   const { user, token } = useContext(AuthContext);
//   const auth = useContext(AuthContext);
//   console.log(auth);
//   // console.log(token);
//   // console.log(user);

//   if (loading) return <p>Cargando notas</p>;
//   if (error) return <ErrorMessage message={error} />;
//   // if (error) return <p>Hubo un error: {error}</p>;

//   return (
//     <section>
//       <h1>
//         Aquí va la lista de notas...hay que separarla del formulario de crear
//         nueva nota{" "}
//       </h1>
//     </section>
//   );
// };
// import { ErrorMessage } from "../components/ErrorMessage";
// import useUser from "../hooks/useUser";

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const UserPage = () => {
    const auth = useContext(AuthContext);
    const { user, token } = useContext(AuthContext);
    console.log(token);
    console.log(user);
    // Validamos que exista la propiedad user y token en el objeto auth
    if (!auth || !auth.user || !auth.token) {
        return <p>No se encontró información del usuario</p>;
    }

    return (
        <section>
            <h3 class="inf">Información del usuario:</h3>
            <article class="user-info">
                <p class="user-info-row">
                    <p class="user-info-label">Id de usuario:</p>
                    <p class="user-info-value">{auth.user.id}</p>
                </p>
                <p class="user-info-row">
                    <p class="user-info-label">Nombre de usuario:</p>
                    <p class="user-info-value">{auth.user.username}</p>
                </p>
                <p class="user-info-row">
                    <p class="user-info-label">Nombre:</p>
                    <p class="user-info-value">{auth.user.name}</p>
                </p>
                <p class="user-info-row">
                    <p class="user-info-label">Apellidos:</p>
                    <p class="user-info-value">{auth.user.lastname}</p>
                </p>
                <p class="user-info-row">
                    <p class="user-info-label">Correo electrónico:</p>
                    <p class="user-info-value">{auth.user.email}</p>
                </p>
                <p>
                    <img
                        src="/mochi-peachcat-cuteeeeee.gif"
                        alt="Peach Cat Mochi"
                    />
                </p>
            </article>
        </section>
    );
};
