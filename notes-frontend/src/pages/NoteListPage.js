/** @format */
import useNotes from '../hooks/useNotes';
import { NoteList } from '../components/NoteList';
// import { ErrorMessage } from "../components/ErrorMessage";
import { NewNote } from '../components/NewNote';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const NoteListPage = () => {
    const { notes, loading, error, addNote, removeNote } = useNotes();
    const { user } = useContext(AuthContext);

    if (loading) return <p>Cargando notas</p>;
    //if (error) return <ErrorMessage message={error} />;
    if (error) return <p>Hubo un error: {error}</p>;

    return (
        <section>
            <h1 class="my-btn">
                <button>
                    <Link to={`/newNote`}>Create New Note</Link>
                </button>
            </h1>
            <h2 class="listaNotas">
                Estas son tus notas creadas{' '}
                <img src="/imagen-cat.gif" alt="Peach Cat Mochi" />
            </h2>

            <NoteList notes={notes} removeNote={removeNote} />
        </section>
    );
};
