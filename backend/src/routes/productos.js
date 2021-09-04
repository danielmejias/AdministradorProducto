const { Router } = require("express");
const router = Router();

const {
  getProductos,
  createProducto,
  deleteProducto,
  getProducto,
  editProducto,
} = require("../controllers/producto.controller");

router.route("/").get(getProductos).post(createProducto);
// router.route("/:id").get(getUser).delete(deleteUser).put(editUser);
module.exports = router;
