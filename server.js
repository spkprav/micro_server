import express from 'express';
import workflowsRoute from './controllers/workflows';
import bodyParser from 'body-parser';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/workflows', workflowsRoute);

app.listen(app.get('port'), () => {
  console.log(`Micro server listening on port ${app.get('port')}`);
});
