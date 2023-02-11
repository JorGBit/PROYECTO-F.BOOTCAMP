const getDB = require('../../db/getDB');
const { generateError } = require('../../helpers');

const noteInfo = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idNote } = req.params;

        const [note] = await connection.query(
            `SELECT * FROM notes WHERE id =?`,
            [idNote]
        );

        if (note.length < 1) {
            throw generateError(
                `La nota con id ${idNote} no existe en la base de datos`,
                404
            );
        }

        const informationNote = {
            id: note[0].id,
            idUser: note[0].idUser,
            idUserAuth: note[0].idUserAuth,
            category: note[0].category,
            tittle: note[0].tittle,
            text: note[0].text,
        };

        res.send({
            status: 'Ok',
            id: informationNote,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = noteInfo;
