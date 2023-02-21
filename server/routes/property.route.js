import express from "express";
import {
  getAllProperties,
  createProperty,
  getPropertyDetail,
  updateProperty,
  deleteProperty,
} from "../controllers/property.ctr.js";

const router = express.Router();

router.route("/").get(getAllProperties);
router.route("/:id").get(getPropertyDetail);
router.route("/").post(createProperty);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(deleteProperty);

export default router;
