import Express from 'express';
import multer from 'multer';

const router = Express.Router();



const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.array('files', 20), (req, res) => {
    let fileNames = [];
    const files = [...req.files];
    files.forEach(file => { fileNames.push(file.originalname) });
    res.status(200).json({ fileNames });
});

export default router;