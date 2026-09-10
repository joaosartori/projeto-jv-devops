const assert = require('assert');

// Simulação de um teste básico
try {
  assert.strictEqual(1 + 1, 2);
  console.log('Todos os testes passaram com sucesso!');
} catch (error) {
  console.error('Falha nos testes:', error);
  process.exit(1);
}