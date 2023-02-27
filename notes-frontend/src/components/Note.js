/** @format */
export const Note = ({ note }) => {
  return (
    <article>
      <p>{note.text}</p>
      {note.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/static/notasImagen/${note.image}`}
          alt={note.text}
        />
      ) : null}
    </article>
  );
};
