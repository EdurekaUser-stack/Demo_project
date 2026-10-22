import { Router } from "express";
import { protect } from "../middleware/protect.js";
import taskRoutes from "./task.routes.js";
import projectRoutes from "./project.routes.js";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/tasks", protect, taskRoutes);
router.use("/projects", protect, projectRoutes);
router.use("/auth", authRoutes);

export default router;
