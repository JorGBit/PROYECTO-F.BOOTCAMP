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
            <h3 className="inf">Información del usuario:</h3>
            <span className="ul_userPage">
                <ol className="li_userPage">Id de usuario: {auth.user.id}</ol>
                <ol className="li_userPage">
                    Nombre de usuario: {auth.user.username}
                </ol>
                <ol className="li_userPage">Nombre: {auth.user.name}</ol>
                <ol className="li_userPage">Apellidos: {auth.user.lastname}</ol>
                <ol className="li_userPage">
                    Correo electrónico: {auth.user.email}
                </ol>
            </span>
        </section>
    );
};
