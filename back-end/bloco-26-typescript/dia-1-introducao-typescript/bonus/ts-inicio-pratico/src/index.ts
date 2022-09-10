import express from 'express';
import routes from './routes';

const app = express();

// const PORT = process.env.PORT || 3000;
app.use(routes);


app.listen(3333, () => console.log('Funfando no http://localhost:3333'));
