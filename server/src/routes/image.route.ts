import { Router } from 'express'
import {text2img} from '../controller/image.controller'

export const imageRouter = Router()

imageRouter.post('/text2img', text2img)

