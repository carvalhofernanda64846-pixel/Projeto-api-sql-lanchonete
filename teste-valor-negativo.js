// Importa o Supabase client
const { createClient } = require('@supabase/supabase-js');

// Conecta com seu projeto Supabase
const supabaseUrl = 'https://sdacfrcawkkpkiwqeyng.supabase.co';
const supabaseKey = 'sb_publishable_buT2AMz6E8wM4fyUODO5KQ_bUKyIA0D';
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para testar valores negativos
async function testarValoresNegativos() {
  const produto = {
    name: "Teste Negativo",
    price: -8, // valor negativo que não deveria ser aceito
  };

  // Tenta criar o produto
  const { data, error } = await supabase
    .from('lanchonete')  // sua tabela
    .insert([produto]);

  if (error) {
    console.log("✅ Teste passou: valor negativo não permitido");
    console.log("Erro retornado:", error.message);
  } else {
    console.log("❌ Teste falhou: valor negativo foi aceito");
    console.log("Item criado:", data);
  }
}

// Executa o teste
testarValoresNegativos();
