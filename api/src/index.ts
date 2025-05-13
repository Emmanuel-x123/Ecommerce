import express, { Router } from "express";
import productrouter from "./routes/products/index";

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!123')
  })




  app.use('/products', productrouter)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })