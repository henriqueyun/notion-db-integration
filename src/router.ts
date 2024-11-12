import { Router } from 'express'
const router = Router()

import controller from './controller'

router.get('/api/v1/create', controller.create)
router.get('/api/v1/find', controller.find)
router.get('/api/v1/update', controller.update)
router.get('/api/v1/remove', controller.remove)
export default router
