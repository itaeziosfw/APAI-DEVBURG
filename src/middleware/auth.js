import jwt from 'jsonwebtoken';
import autchConfig from './../Config/auth.js'

const authMiddleware = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: 'token not provided' });
    }

    const [, token] = authHeader.split([1]);

    try {
        const decoded = jwt.verify(token, authConfig.secret);
        request.userId = decoded.id;

        request.userId = decoded.id;
        request.userIsAdmin = decoded.admin;


        return next();

    } catch {
        return response.status(401).json({ error: 'token is invalid' });
    }
};

export default authMiddleware