const express = require("express");
const productRouter = express.Router();

// Controller Location
const {
  getAllProductsController,
  getSingleProductsController,
  searchProductController,
  sortByDateProductController,
  filteredProductController,
  addProductController,
  editProductController,
  deleteProductController,
} = require("../controllers/productController");

// This endpoint is for view all products.
productRouter.get("/products", getAllProductsController);

// This endpoint is for view single product by Id.
productRouter.get("/products/:id", getSingleProductsController);

// This endpoint is for view searched products.
productRouter.get("/productSearch", searchProductController);

// This endpoint is for view sort by date.
productRouter.get("/productSort", sortByDateProductController);

// This endpoint is for view filter by category.
productRouter.get("/productFilter", filteredProductController);

// This endpoint is for add a new product.
productRouter.post("/products", addProductController);

// This endpoint is for edit all products by id.
productRouter.patch("/products/:id", editProductController);

// This endpoint is for delete products by id.
productRouter.delete("/products/:id", deleteProductController);

module.exports = { productRouter };


 