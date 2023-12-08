import { Router } from "express";
import * as controller from './controller.js';

import multer from "multer";
const upload=multer({dest:'./uploads'});
const router=Router();

router.route('/').post(upload.single('avathar'),controller.images);

export default router;