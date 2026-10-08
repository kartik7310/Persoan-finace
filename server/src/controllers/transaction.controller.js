import Transaction from "../models/transaction.model.js";
import mongoose from "mongoose";
// CREATE TRANSACTION
export const createTransaction = async (req, res) => {
  try {
    const { type, amount, category, date,title } = req.body;

    if (!type || !amount || !category ||!title) {
      return res.status(400).json({
        message: "Type, amount and category are required",
      });
    }

    const transaction = await Transaction.create({
      type,
      amount,
      category,
      date,
      title,
      user: req.user.id,
    });

    return res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


// GET ALL TRANSACTIONS

export const getTransactions = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      type,
      category,
      startDate,
      endDate,
    } = req.query;

    const query = {
      user: req.user.id,
    };

    // Filter by type
    if (type) {
      query.type = type;
    }

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by date range
    if (startDate || endDate) {
      query.date = {};

      if (startDate) {
        query.date.$gte = new Date(startDate);
      }

      if (endDate) {
        query.date.$lte = new Date(endDate);
      }
    }

    // Pagination
    const skip = (Number(page) - 1) * Number(limit);

    const transactions = await Transaction.find(query)
      .sort({ date: -1 })
      .skip(skip)
      .limit(Number(limit));

    const totalTransactions = await Transaction.countDocuments(query);

    return res.status(200).json({
      transactions,
      pagination: {
        currentPage: Number(page),
        limit: Number(limit),
        totalTransactions,
        totalPages: Math.ceil(
          totalTransactions / Number(limit)
        ),
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// UPDATE TRANSACTION
export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid transaction ID",
      });
    }

      
    const { type, amount, category, date } = req.body;

    const transaction = await Transaction.findOneAndUpdate(
      {
        _id: id,
        user: req.user.id,
      },
      {
        type,
        amount,
        category,
        date,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    return res.status(200).json({
      message: "Transaction updated successfully",
      transaction,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


// DELETE TRANSACTION
export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    return res.status(200).json({
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};