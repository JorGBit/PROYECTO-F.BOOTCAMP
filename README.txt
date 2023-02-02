# PROYECTO-F.BOOTCAMP

POR HACER

1. TERMINAR DE ARREGLAR BACKEND

**Conseguir poner usuarios públicos/privados 
**CORRECCIONES DE SAMU:

-En el controller loginUser, tenéis en la línea 6 un require de dotenv. No hace falta ya que ya lo hacéis en server.js (con hacerlo una vez llega)

-Cuando creas una nota, el server responde con los datos de la nota creada y con el idUserAuth. En vez del idUserAuth debería de enviar el id de la nota creada

-El GET /notes, debería de dar el listado de notas del usuario loggeado, pero no las notas de los demás (ya que por defecto son privadas)

-En el GET /notes enseñáis toda la info de las notas, y en el GET /noteInfo/:id, que es para ver una nota en detalle, solo enseñáis el id y el title. Debería ser al revés, en el listado que salga solo el title y el id, y cuando ves una nota en detalle, que salga todo

-Cuando edito una nota, si mando una categoría no válida, me salta un error de mySQL. Estaría bien validar el body con Joi, igual que hacéis al crear una nota. De hecho, el schema sería exactamente igual, pero los campos no son required.

-En la función deletePhoto de los helpers, en el catch, el throw new error tiene que ser con mayúscula, throw new Error(). El mensaje sería "Error al intentar eliminar la foto del servidor"

-Cuando añades una foto, dice "Foto de producto añadida con éxito". Cambiadlo por foto de nota jeje

-Al intentar subir una foto, da error si no existe la carpeta static/notasImagen. Es normal, pero molaría que se crease sola en caso de no existir, o que al menos esté subida al repo de git. El problema es que git ignora automáticamente las carpetas vacías, entonces para que se subiese hay que meter algún archivo dentro. Lo que la gente suele hacer, es poner un archivo vacío llamado .gitkeep. Simplemente se le llama así para que la gente sepa que es un archivo sin importancia, solo para que git conserve la carpeta





**Terminar el resto de puntos del bonus del proyecto 2


2. DARLE CAÑA AL FRONTED. DIVISIÓN DE TAREAS:
