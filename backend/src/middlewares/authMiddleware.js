exports.isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }
  
    try {
      // Lógica para verificar o token
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Token inválido' });
    }
  };  