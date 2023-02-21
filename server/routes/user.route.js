import express from "express";
import {
  getAllUsers,
  createUser,
  getUserInfoById,
} from "../controllers/user.ctr.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoById);

export default router;
