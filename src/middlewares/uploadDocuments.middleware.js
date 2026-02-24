import createMulter from "../config/upload.multer.js";

const uploadFile = createMulter ({
    pasta: 'documents',
    tiposPermitidos: [
        'application/pdf',
        'application;msword', // .doc - formato antigo
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' //.docx
    ], 
    tamanhoArquivo: 10 * 1024 * 1024

}).single('doc');

export default uploadFile;