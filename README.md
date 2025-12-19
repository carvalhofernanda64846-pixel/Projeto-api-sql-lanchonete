## 🍔 Projeto Lanchonete – API + Banco de Dados

## 📌 Sobre o projeto
Projeto criado para estudo usando:
- Banco de dados no Supabase
- Testes de rotas no Postman
- Operações CRUD (GET, POST, PUT, DELETE)

A ideia é simular um cardápio de uma lanchonete com produtos que podem ser cadastrados, listados, atualizados e removidos.

## 🗂 Estrutura do repositório
- **/banco** → contém a estrutura da tabela e os inserts adicionados;
- **/postman** → arquivo exportado com todas as rotas testadas.

## 🛢 Banco de Dados (Supabase)
Foi criada uma tabela com:
- id
- nome
- preço

Depois foram adicionados produtos para teste.
Todas as rotas foram testadas no Postman usando a chave de autenticação.

## 🧪 Testes pelo Postman
1. Importar a coleção da pasta **postman**
2. Configurar a URL base do projeto Supabase
3. Incluir `apikey` e `Authorization: Bearer <sua_public_api_key>` nos headers
4. Executar as rotas e validar o retorno no banco:
   - GET → listar registros
   - POST → criar novos itens
   - PUT → atualizar preço ou nome
   - DELETE → remover item por ID

## ▶ Como executar o projeto
1. Criar o projeto no Supabase
2. Criar a tabela
3. Inserir alguns dados
4. Importar coleção no Postman
5. Testar GET, POST, PUT e DELETE

## 🚀 Status
Projeto finalizado para fins de estudo.
Pode ser expandido com novas rotas, relacionamento de tabelas e autenticação.




