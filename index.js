//MiddleWare
import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
//Router
import router from './routers/index.js';
//DB
import connectToDB from './database/index.js';

const app = express();
const port = 3000;

app.use(morgan("combined"))
app.use(cors({ origin: "*" }))
app.use(express.json());
app.use(router)

connectToDB()

app.listen(port, () => {
    console.log(`Ứng dụng đang lắng nghe tại http://localhost:${port}`);
});
