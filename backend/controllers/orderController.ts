import { Request, Response } from "express";
import pool from "../models/Database";

//Get all orders for a specific user
//Need to ensure that the user is authenticated and authorized to view their own orders
export const getUserOrders = async (req: Request, res: Response) => {
    const userId = (req as any).user?.id;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const [orders]: any = await pool.query(
            'SELECT id, total_amount, status, created_at FROM orders WHERE user_id = ? ORDER BY created_at DESC',
            [userId]

        );

        res.json(orders);
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};