const multer = require('multer');
const { resolve } = require('node:path');

let uuidv4;
(async () => {
    const { v4 } = await import('uuid');
    uuidv4 = v4;
})();

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename(_req, file, callback) {
            callback(null, `${uuidv4()}-${file.originalname}`);
        },
    }),
};
