import { Router } from "express";

//products router end points.
const router = Router();

  router.get('/', (req, res) =>{
    res.send('the list of products 123')
  })

  router.get('/:id', (req, res) =>{
    console.log(req.params)
    res.send('a products')
  })

  router.post('/', (req, res)=>{
    res.send('new product created')
  })

  export default router;