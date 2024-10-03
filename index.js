import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.post('/webhook', (req, res) => {
    console.log('Received Webhook:', req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
