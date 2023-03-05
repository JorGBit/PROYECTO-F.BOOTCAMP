/** @format */

import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { sendNoteService } from '../services';
import { Link } from 'react-router-dom';
export const NewNote = ({ addNote }) => {
    const [error, setError] = useState('');
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
        <form className="form" onSubmit={handleForm}>
            <h1 className="form__title">Crea una nota nueva</h1>
            <fieldset>
                <label htmlFor="tittle">Título</label>
                <input
                    type="tittle"
                    id="tittle"
                    name="tittle"
                    className="form__input"
                    required
                />
            </fieldset>
            <fieldset>
                <label htmlFor="category">Categoría</label>
                <select id="category" name="category" className="form__input">
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
            </fieldset>

            <fieldset>
                <label htmlFor="text">Texto</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    className="form__input"
                    required
                />
            </fieldset>
            <fieldset>
                <label htmlFor="image">Imagen</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="form__input"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                {image ? (
                    <figure>
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            style={{ width: '100px' }}
                        />
                    </figure>
                ) : null}
            </fieldset>
            <button className="form_note_btn">Enviar nota</button>
            {sending ? <p>Enviando nota</p> : null}
            {error ? <p>{error}</p> : null}
        </form>
    );
};
