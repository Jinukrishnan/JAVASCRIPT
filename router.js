import { Router } from "express";
import multer from "multer";

import * as fileHandler from "./request-handler.js";

const storage = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage })

const router = Router();

router.route("/set").post(upload.single("image"),fileHandler.Set);
router.route("/get").get(fileHandler.Get);
router.route("/image/:image").get(fileHandler.Image);

export default router;