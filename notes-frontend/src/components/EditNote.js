/** @format */

import { useState, useContext } from 'react';
import { editNoteService } from '../services/index';
import { ErrorMessage } from './ErrorMessage';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
export function EditNote({ note, onSubmit, onError }) {
    const [newData, setNewData] = useState(
        note
            ? {
                  id: note.id,
                  tittle: note.tittle,
                  category: note.category,
                  text: note.text,
              }
            : {}
    );
    const [error, setError] = useState(null);
    const { user, token } = useContext(AuthContext);
    const navigate = useNavigate();
    if (!user || !note) {
        return <p>loading</p>;
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log('newData:', newData);

        try {
            const { tittle, category, text } = newData;
            const updatedNote = await editNoteService(token, note.id, {
                tittle,
                category,
                text,
            });
            onSubmit(updatedNote);
            navigate(`/noteInfo/${updatedNote.id}`);
        } catch (error) {
            onError(error.message);
            setError(error.message);
        }
    };

    return (
        <form className="form_Edit" onSubmit={handleFormSubmit}>
            <label>
                Título:
                <input
                    type="text"
                    name="tittle"
                    value={newData.tittle}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Categoría:
                <select
                    name="category"
                    value={newData.category}
                    onChange={handleInputChange}
                >
                    <option value="trabajo" class="cat__trabajo">
                        Trabajo
                    </option>
                    <option value="estudio" class="cat__estudio">
                        Estudio
                    </option>
                    <option value="finanzas" class="cat__finanzas">
                        Finanzas
                    </option>
                    <option value="viajes" class="cat__viajes">
                        Viajes
                    </option>
                    <option value="salud" class="cat__salud">
                        Salud
                    </option>
                    <option value="cocina" class="cat__cocina">
                        Cocina
                    </option>
                    <option value="jardineria" class="cat__jardineria">
                        Jardinería
                    </option>
                    <option value="ejercicio" class="cat__ejercicio">
                        Ejercicio
                    </option>
                    <option value="moda" class="cat__moda">
                        Moda
                    </option>
                    <option value="relaciones" class="cat__relaciones">
                        Relaciones
                    </option>
                    <option value="mascotas" class="cat__mascotas">
                        Mascotas
                    </option>
                    <option
                        value="viaje-de-negocios"
                        class="cat__viaje-de-negocios"
                    >
                        Viaje de negocios
                    </option>
                    <option value="proyectos" class="cat__proyectos">
                        Proyectos
                    </option>
                    <option
                        value="desarrollo-personal"
                        class="cat__desarrollo-personal"
                    >
                        Desarrollo personal
                    </option>
                </select>
            </label>
            <label>
                Texto:
                <textarea
                    name="text"
                    value={newData.text}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Guardar cambios</button>
            {error && <ErrorMessage message={error} />}
            <Link to={`/noteInfo/${note.id}`}>Volver</Link>
        </form>
    );
}
