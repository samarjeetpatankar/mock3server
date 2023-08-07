// Model Location
const { productModel } = require("../model/productModel");

// This endpoint is for view all products
const getAllProductsController = async (req, res) => {
  const limit = req.query.limit;
  try {
    const allProducts = await productModel.find().limit(limit);
    return res.status(200).json(allProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for view single product by Id.
const getSingleProductsController = async (req, res) => {
  const Id = req.params.id;
  try {
    const data = await productModel.findById({ _id: Id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for view searched products.
const searchProductController = async (req, res) => {
  const searchedProduct = req.query.search;
  try {
    const data = await productModel.find({
      name: { $regex: `(?i)${searchedProduct}` },
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for view sort by date.
const sortByDateProductController = async (req, res) => {
  const status = req.query.sort;
  try {
    if (status == "asc") {
      const data = await productModel.find().sort({
        postedAt: 1,
      });
      return res.status(200).json(data);
    } else {
      if (status == "desc") {
        const data = await productModel.find().sort({
          postedAt: -1,
        });
        return res.status(200).json(data);
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for view filter by category.
const filteredProductController = async (req, res) => {
  const search = req.query.category;
  try {
    const categoryProduct = await productModel.find({ category: search });
    return res.status(200).json(categoryProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for add a new product.
const addProductController = async (req, res) => {
  const payload = req.body;
  try {
    if (
      payload.name == "" ||
      payload.description == "" ||
      payload.category == "" ||
      payload.location == "" ||
      payload.postedAt == "" ||
      payload.price == ""
    )
      return res.status(501).json("Enter all fields");

    const data = new productModel(payload);
    await data.save();

    return res.status(200).send({
      Message: "Product added successfully",
      AddedData: data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for edit all products by id.
const editProductController = async (req, res) => {
  const Id = req.params.id;
  const payload = req.body;
  try {
    const data = await productModel.findByIdAndUpdate({ _id: Id }, payload);

    return res.status(200).send({
      Message: "Product Updated successfully",
      UpdatedData: data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

// This endpoint is for delete products by id.
const deleteProductController = async (req, res) => {
  const Id = req.params.id;
  try {
    await productModel.findByIdAndDelete({ _id: Id });

    return res.status(200).send({
      Message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Message: error.message,
    });
  }
};

module.exports = {
  getAllProductsController,
  getSingleProductsController,
  searchProductController,
  sortByDateProductController,
  filteredProductController,
  addProductController,
  editProductController,
  deleteProductController,
};
  

