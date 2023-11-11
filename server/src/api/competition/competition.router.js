import { Router } from 'express'
import { getCompetition } from './competition.controller.js'

const competitionRouter = Router();

competitionRouter.post('/', getCompetition);

export default competitionRouter;