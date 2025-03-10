import express from "express";

const errorResponse = (response, status, message) => {
  return response.status(status).json({ message });
};

export { errorResponse };
