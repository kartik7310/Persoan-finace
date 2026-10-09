export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Smart Interview Tracker API is running",
    timestamp: new Date().toISOString()
  });
};

