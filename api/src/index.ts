import express, { json, Router, urlencoded } from "express";
import productrouter from "./routes/products/index";
import authRoutes from "./routes/auth/index";

const app = express();

const port = 3000;

app.use(urlencoded({extended: false}));
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!123')
  })




  app.use('/products', productrouter)
  app.use('/auth', authRoutes)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })