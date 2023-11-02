
O projeto "Genshin CRUD" é um sistema simples desenvolvido em Node.js e Express que permite a criação de rotas para consulta de personagens do jogo Genshin Impact. Com ele, você pode consultar todos os personagens, detalhes de um personagem específico e personagens por conjunto de artefatos.

# Tecnologias Usadas
Node.js
Express.js
Instalação
Para executar o projeto, siga as etapas abaixo:

Certifique-se de ter o Node.js instalado em seu sistema.

# O projeto oferece as seguintes rotas:

*Consulta de Todos os Personagens*
 Rota: http://localhost:8080/personagens
 Método: GET
 Descrição: Retorna a lista de todos os personagens disponíveis.

*Consulta de Detalhes do Personagem*
Rota: http://localhost:8080/personagens/:nome
Método: GET
Parâmetros:
:nome: O nome do personagem que você deseja consultar.
Descrição: Retorna os detalhes de um personagem específico com base no nome fornecido.

*Consulta de Personagens por Conjunto de Artefatos*
Rota: http://localhost:8080/personagens/conjunto/:conjunto
Método: GET
Parâmetros:
:conjunto: O nome do conjunto de artefatos que você deseja consultar.
Descrição: Retorna a lista de personagens que usam um conjunto de artefatos específico.

