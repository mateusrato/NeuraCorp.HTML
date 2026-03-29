const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("🔥 Servidor rodando na porta 3000");
});

app.post('/recuperar-senha', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      erro: 'Email é obrigatório'
    });
  }

  console.log('Pedido de recuperação para:', email);

  res.json({
    mensagem: 'Se o email existir, enviaremos instruções'
  });
});
