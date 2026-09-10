const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
  res.json({ status: 'API online e funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});