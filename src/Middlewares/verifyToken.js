import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];

  if (!authHeader)
    return response.status(403).json({ message: "Token não encontrado!" });

  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return response
      .status(403)
      .json({ message: "Token não formatado ou ausente!" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    request.userId = decoded.objectIdentify;
    next();
  } catch (err) {
    return response
      .status(401)
      .json({ message: "Token inválido ou expirado!" });
  }
};

export { verifyToken };
