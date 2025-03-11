# Controle-de-Vendas-de-Gado
Objetivo:
O sistema tem como objetivo facilitar o gerenciamento e controle de vendas de gado, permitindo que o usuário registre, consulte e gerencie transações de compra e venda de maneira eficiente.

Funcionalidades principais:
<br>
Cadastro e Autenticação de Usuários

CRUD de Gado (Criar, Ler, Atualizar e Excluir registros de gado)

Cadastro de Compradores

Registro de Vendas (com transações associadas a um comprador e animal)

Controle de Pagamentos (status pago/não pago, datas de vencimento)

Filtros e Pesquisa de Gado e Transações

Tecnologias Utilizadas:
<br>
Frontend:
<br>
HTML, CSS, JavaScript – Base para estrutura e interatividade

React.js – Framework para criar a interface

TailwindCSS – Para estilização
<br>
Backend:
<br>
Node.js com Express.js – Para criação da API REST

PostgreSQL – Banco de dados relacional

Sequelize – ORM para interação com o banco de dados

JWT – Para autenticação segura dos usuários


Sistema de Gestão de Gado
1. Requisitos da Aplicação
1.1 Requisitos Funcionais
•	RF01: Cadastro de animais (ID, raça, idade, peso, status de saúde, valor de mercado, etc.).
•	RF02: Registro de transações de compra e venda de gado.
•	RF03: Controle de alimentação e vacinação dos animais.
•	RF04: Relatórios de desempenho e histórico de vendas.
•	RF05: Autenticação de usuários para garantir segurança no acesso aos dados.
•	RF06: Painel administrativo para gerenciar registros e transações.
1.2 Requisitos Não Funcionais
•	RNF01: Interface responsiva para acesso em dispositivos móveis.
•	RN0F2: Armazenamento seguro dos dados com backup periódico.
•	RNF03: Performance otimizada para consultas rápidas ao banco de dados.
•	RNF04:Logs de operações para auditoria e rastreabilidade.
•	RNF05: Facilidade de manutenção e escalabilidade do sistema.
________________________________________
2. Estratégias de Desenvolvimento
2.1 Tipo de Arquitetura
monolítica, pois é mais simples de implementar e facilita o desenvolvimento inicial, dado que o escopo é relativamente pequeno. 
2.2 Tecnologias Escolhidas e Justificativas
Front-end:
•	HTML, CSS e JavaScript – Base para estrutura e interatividade do sistema.
•	React.js – Framework para criar uma interface moderna e dinâmica.
•	TailwindCSS – Biblioteca para estilização rápida e eficiente.
Back-end:
•	Node.js com Express.js – Para construção da API REST, garantindo leveza e eficiência.
•	PostgreSQL – Banco de dados relacional para armazenar os dados com segurança e integridade.
•	Sequelize – ORM para facilitar a interação com o banco de dados.
•	JWT (JSON Web Token) – Para autenticação segura dos usuários.
Infraestrutura:
•	XAMPP – Para rodar o servidor localmente durante o desenvolvimento.
•	GitHub – Para versionamento do código e colaboração.
________________________________________
3. Plano de Trabalho
Como o desenvolvimento será individual, o trabalho será distribuído da seguinte forma:
Parte 1:
•	Estruturar o banco de dados no PostgreSQL.
•	Criar o ambiente de desenvolvimento no VS Code e XAMPP.
Parte 2: 
•	Implementar o backend com Node.js e Express.js.
•	Configurar autenticação com JWT.
Parte 3:
•	Desenvolver o frontend com React.js e TailwindCSS.
•	Criar telas de cadastro e listagem de gado.
Parte 4: 
•	Integrar frontend e backend.
•	Testes e ajustes finais.
•	Publicação no GitHub e finalização da documentação.
