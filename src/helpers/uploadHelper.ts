import * as multer from 'multer'
const storage = multer.memoryStorage()
export const uploadImage = multer({ storage }).fields([{ name: 'image', maxCount: 4 }])
