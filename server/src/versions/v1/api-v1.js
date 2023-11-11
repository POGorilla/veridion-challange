import { Router } from 'express'
import competitionRouter from '../../api/competition/competition.router.js';

const version1Router = Router();

version1Router.use('/competition', competitionRouter);

export default version1Router;