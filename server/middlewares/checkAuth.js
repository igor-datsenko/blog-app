import jwt from 'jsonwebtoken';

export const checkAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
      console.log(decoded);
    req.decoded = decoded;
    next();
  });
};