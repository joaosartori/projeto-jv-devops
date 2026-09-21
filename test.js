const assert = require('assert');

// Função simples da nossa aplicação que queremos testar
function soma(a, b) {
  return a + b;
}

// Execução do Teste Unitário
try {
  assert.strictEqual(soma(2, 3), 5);
  console.log('✅ Teste unitário aprovado com sucesso: 2 + 3 = 5');
} catch (error) {
  console.error('❌ Falha no teste unitário');
  process.exit(1); // Força a action a falhar se o teste der erro
}