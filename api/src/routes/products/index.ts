import { Router } from "express";
import { listProducts, 
        getProductById, 
        createProduct, 
       updateProduct, 
       deleteProduct 
      } from "./productsControler";

//products router end points.
const router = Router();

  router.get('/', listProducts)

  router.get('/:id', getProductById)

  router.post('/', createProduct)

  router.put('/:id', updateProduct)

  router.delete('/:id', deleteProduct)

  export default router;