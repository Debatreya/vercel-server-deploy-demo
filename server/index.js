import express from 'express'
import { config } from 'dotenv'
config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.use('/ping', (req, res) => {
    return res.send('pong');
});

app.all('*', (req, res)=>{
    res.status(404).send('OOPS!! 404 page not found');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});