export const notFound = (req, res, next) => {
  res.status(404).json({
    error: `Not Found - ${req.originalUrl}`,
  });
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
