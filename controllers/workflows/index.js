import express from 'express';
import view from './view';
import permittedParams from './permittedParams';
import s3 from '../../lib/s3';

/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable */

// POST create
router.post('/', (req, res) => {
  s3.download(permittedParams.create(req.body))
    .then(view.show)
    .then(res.send.bind(res))
    .catch(res.send.bind(res));
});

export default router;
