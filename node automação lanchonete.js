// lanchonete.js
const { createClient } = require('@supabase/supabase-js');

// Substitua pela sua URL e chave do Supabase
const SUPABASE_URL = 'https://sdacfrcawkkpkiwqeyng.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_buT2AMz6E8wM4fyUODO5KQ_bUKyIA0D';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function main() {
  try {
    // Lista de produtos para adicionar
    const produtos = [
      { name: 'Pamonha', price: 15 },
      { name: 'Creme', price: 12 },
      { name: 'Açai', price: 30 },
      { name: 'Torta doce', price: 10 },
      { name: 'Torta salgada', price: 10 },
      { name: 'Cochinha', price: 8 },
    ];

    // Inserir produtos
    for (let produto of produtos) {
      const { data, error } = await supabase
        .from('lanchonete')
        .insert([produto]);

      if (error) {
        console.log('Erro ao inserir produto:', produto.name, error.message);
      } else {
        console.log('Produto inserido com sucesso:', data);
      }
    }

    // Buscar todos os produtos
    const { data: todos, error: err } = await supabase
      .from('lanchonete')
      .select('*');

    if (err) {
      console.log('Erro ao buscar produtos:', err.message);
    } else {
      console.log('Todos os produtos da lanchonete:', todos);
    }
  } catch (err) {
    console.error('Erro inesperado:', err);
  }
}

// Rodar o script
main();
