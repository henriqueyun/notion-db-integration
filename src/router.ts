import { Router } from 'express'
const router = Router()

import controller from './controller'

router.post('/company-campaign', controller.create)
router.get('/company-campaign', controller.find)
router.patch('/company-campaign/:id', controller.update)
router.delete('/company-campaign/:id', controller.remove)

export default router
