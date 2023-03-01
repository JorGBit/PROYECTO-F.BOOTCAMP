const getDB = require('../../db/getDB');

const listNotes = async (req, res, next) => {
    let connection;
    try {
        connection = await getDB();
        const idUserAuth = req.userAuth.id;

        const { search, order, direction } = req.query;

        const validOrderOptions = ['tittle', 'category', 'created'];

        const validDirectionOptions = ['ASC', 'DESC'];

        const orderBy = validDirectionOptions.includes(order)
            ? order
            : 'created_at';

        const orderDirection = validDirectionOptions.includes(direction)
            ? direction
            : 'ASC';

        //realizamos consulta filtrando la nota por su título
        const [notes] = await connection.query(
            `SELECT n.id, n.tittle, n.category FROM notes n INNER JOIN user u  ON (n.idUser = u.id) WHERE n.idUser= ? ORDER BY ${orderBy} ${orderDirection}`,
            [idUserAuth]
        );

        const data = [];

        for (let i = 0; i < notes.length; i++) {
            const [photos] = await connection.query(
                `SELECT id, name FROM photo_notes WHERE idNotes = ?`,
                [notes[i].id]
            );

            //variable que guardará los datos de las notass

            data.push({
                ...notes[i],
                photos,
            });
        }
        res.send({
            status: 'Ok',
            message: 'Lista de notas creada',
            notes: data,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = listNotes;
