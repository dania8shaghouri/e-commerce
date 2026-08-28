import express from "express";
import validateJWT from "../middlewares/validateJWT.js";
import requireAdmin from "../middlewares/requireAdmin.js";
import {
  getAdminProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "../controllers/productController.js";

const router = express.Router();

// Express fonksiyonları sırayla çalıştırır : İlk middleware
// 1.validateJWT: şunu kontrol eder:bu kullanıcı gerçekten giriş yapmış mı?
// 2.requireAdmin:burada artık şu soruyu soruyoruz:tamam kullanıcı giriş yapmış. Ama admin mi?
router.get("/dashboard", validateJWT, requireAdmin, (req, res) => {
  res.json({ message: "Admin dashboard data" });
});

router.get("/products", validateJWT, requireAdmin, getAdminProductsHandler);
router.post("/products", validateJWT, requireAdmin, createProductHandler);
router.put("/products/:id", validateJWT, requireAdmin, updateProductHandler);
router.delete("/products/:id", validateJWT, requireAdmin, deleteProductHandler);

export default router;