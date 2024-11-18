import express, {Express} from "express";

const app: Express = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.json({
        msg: "Hello world!"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})