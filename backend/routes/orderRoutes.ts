import { Router } from "express";
import { getUserOrders } from "../controllers/orderController";

const router = Router();

// Route to get all orders for a specific user
//Protected route, requires authentications
router.get("/", getUserOrders);

export default router;