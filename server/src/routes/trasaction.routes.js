import express from "express";

import {
createTransaction,
getTransactions,
updateTransaction,
deleteTransaction

} from "../controllers/transaction.controller.js";

import {protect} from "../middlewares/auth.middleware.js"

const router = express.Router();

// All transaction routes require login
router.use(protect);

router.post("/", createTransaction);

router.get("/", getTransactions);


router.put("/:id", updateTransaction);

router.delete("/:id", deleteTransaction);

export default router;