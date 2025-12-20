🍔 Projeto Lanchonete – API + Banco de Dados + Automação

📌 Sobre o projeto
Projeto criado para estudo usando:

- Banco de dados no Supabase
- Testes de rotas no Postman
- Operações CRUD (GET, POST, PUT, DELETE)
- Automação de testes com Node.js e Supabase.js

A ideia é simular um cardápio de uma lanchonete com produtos que podem ser cadastrados, listados, atualizados e removidos, além de permitir testes automatizados para validação.

🗂 Estrutura do repositório
/banco → contém a estrutura da tabela e os inserts adicionais;  
/postman → arquivo exportado com todas as rotas testadas;  
/automacao → script `lanchonete.js` que realiza testes automatizados na tabela do Supabase.

🛢 Banco de Dados (Supabase)
- Tabela principal criada: `lanchonete`  
- Colunas: `id`, `name`, `price`  
- Todos os produtos foram inseridos e testados via Postman.  
- Automação do teste também utiliza a tabela, permitindo validar GET, POST, PUT e DELETE de forma programática.

🧪 Testes pelo Postman
1. Importar a coleção da pasta `/postman`
2. Configurar a URL base do projeto Supabase
3. Incluir `apikey e Authorization: Bearer <sua_public_api_key>` nos cabeçalhos
4. Executar as rotas e validar o retorno no banco:
   - **GET** → listar registros  
   - **POST** → criar novos itens  
   - **PUT** → atualizar preço ou nome  
   - **DELETE** → remove item por ID

🤖 Automação de testes
- Abrir a pasta para `/automacao`
- Inicializar o projeto Node.js:
  ```bash
  npm init -y
  
- Instalar a biblioteca do supabase:
`npm install @supabase/supabase-js`

- Rodar o script no terminal:
  `node teste-lanchonete.js`
  
- O script realiza inserção e validação de dados automaticamente no Supabase.
