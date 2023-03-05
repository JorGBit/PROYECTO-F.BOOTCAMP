
//OTRA VERSION

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { deleteNoteService } from '../services';
import EditNoteButton from './EditButton';

export const Note = ({ note, removeNote }) => {
    const navigate = useNavigate();
    const { user, token } = useContext(AuthContext);
    const [error, setError] = useState('');

    if (!user) return <p>loading</p>;

    const deleteNote = async (id) => {
        try {
            await deleteNoteService({ id, token });
            if (removeNote) {
                removeNote(id);
            } else {
                navigate('/noteList');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <article>
            <h2>
                Título: <span>{note.tittle}</span>{' '}
            </h2>
            <h2>
                Categoría:{' '}
                <span className={`category--${note.category}`}>
                    {note.category}
                </span>
            </h2>

            <h2>
                Texto: <span>{note.text}</span>{' '}
            </h2>
             
            <span>
                By <Link to={`/users`}>{user.email}</Link> on{''}
                <Link to={`/noteInfo/${note.id}`}>
                    {new Date(note.created_at).toLocaleString()}
                </Link>
            </span>
            {user && user.id === note.idUser ? (
                <section>
                    <button
                        onClick={() => {
                            if (window.confirm('Are you sure?'))
                                deleteNote(note.id);
                        }}
                    >
                        Detele Note
                    </button>{' '}
                    <EditNoteButton id={note.id} />
                    <Link to={`/notes/${note.id}/photo`}>
                        <button>Add Photo</button>
                    </Link>
                    {error ? <p>{error}</p> : null}
                </section>
            ) : null}
        </article>
    );
};
