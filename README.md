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

🧪 Teste com valores inválidos Postman/Node.js

Testamos a criação de produtos com preço negativo.  
O banco Supabase está configurado com uma restrição (`CHECK price > 0`), então:

- A tentativa de criar produto com valor negativo `price: -8` → retornou erro 400 no Postman e no Node.js validou que valor negativo não é permitido.
- Resultado esperado: **não aceita valores negativos** ✅

 🔗 Integração entre Tabelas (Clientes + Produtos + Pedidos)
Nesta evolução do projeto, foram criadas duas novas tabelas no banco (Supabase):
`clientes`  e
`pedidos`
Essas tabelas foram relacionadas à tabela já existente (lanchonete, que contém os produtos).
Com isso, agora é possível:
registrar um pedido vinculando cliente + produto
armazenar o valor total do pedido,
consultar pedidos já realizados.
Além disso, foi criada uma VIEW SQL (pedidos_completos), que unifica os dados das três tabelas e retorna o pedido completo, incluindo:
- Número do pedido
- Nome do cliente
- Produto comprado
- Preço do produto
- Total armazenado do pedido

E também foram feitos rotas no postman, para validar a junção das 3 tabelas.

