import Express from 'express';
import multer from 'multer';
import path from 'path';

const router = Express.Router();

let fileNames = [];

const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    const generatedName = Date.now().toString() + file.originalname.slice(file.originalname.lastIndexOf('.'));
    cb(null, `${generatedName}`);
    fileNames.push(generatedName);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.array('files', 10), (req, res) => {
    res.status(200).json({ fileNames });
});

export default router;