import express from 'express';
import WorkflowsView from './view';
import Params from '../../lib/params';
import S3 from '../../lib/s3';

/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable */

let s3 = new S3();
let view = new WorkflowsView();

// POST create
router.post('/', (req, res) => {
  let fileParams = Params.permit(req.body, ['filekey']);
  s3.download(fileParams)
    .then(view.create)
    .then(res.send.bind(res))
    .catch(res.send.bind(res));
});

export default router;
