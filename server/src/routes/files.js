import Express from 'express';
import multer from 'multer';

const router = Express.Router();

let fileNames = [];

const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    /*const generatedName = Date.now().toString() + file.originalname.slice(file.originalname.lastIndexOf('.'));
    console.log(file.originalname);*/
    cb(null, `${file.originalname}`);
    fileNames.push(file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).json({ fileNames });
});

export default router;