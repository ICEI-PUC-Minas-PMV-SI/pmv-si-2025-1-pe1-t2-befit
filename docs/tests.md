# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

**Caso de Teste** | **CT01 - Criar conta **
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em cadastrar <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "cadastrar".
**Requisitos associados** |RF-009 	Pagina incial para login e cadastro na plataroma.
**Resultado esperado** | Prosseguir para pagina inicial
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Cadastro protocolo alimentar**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "adicionat alimento" <br> 
**Requisitos associados** | RF-001	Permitir cadastro da dieta e protocolo a ser seguido
**Resultado esperado** |alimento adicionado na dieta
**Dados de entrada** | Inserção de dados na dieta
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Criar lista de compras**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Escolha as recitas sugeridas com base no protocolo 2) Salve na agenda  3) clique no botão "lista de compras'
**Requisitos associados**  |RF-003 	Sugerir lista de compras automáticas com base no plano de refeições escolhido.
**Resultado esperado** |Lista de compras gerada
**Dados de entrada** |lista de compras
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Calculo IMC**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em calculo IMC> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Continuar".
**Requisitos associados** | RF-005 	Disponibilizar ferramenta para monitoramento do peso por meio do cálculo de IMC.
**Resultado esperado** | Calculo realizado 
**Dados de entrada** | Inserção de dados: altura e peso 
**Resultado obtido** | Calculo imc

**Caso de Teste** | **CT05 - Relatórios**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em Relatórios <br> 2)Selecione período <br> 3) Clique no botão "Gerar Relatório".
**Requisitos associados** | RF-008 	Disponibilizar relatório diário, semanal e mensal.
**Resultado esperado** | Relatórios gerados com sucesso
**Dados de entrada** | periodos para gerar relatórios
**Resultado obtido** | Sucesso


## Registro dos Testes de Software

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.



Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 | *CT01 - Criar conta *                                       |
|---|---|
|Requisito Associado |RF-009 	Pagina incial para login e cadastro na plataroma. |
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Cadastro protocolo alimentar*                                        |
|---|---|
|Requisito Associado | RF-001	Permitir cadastro da dieta e protocolo a ser seguido|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT03 - Criar lista de compras*                                        |
|---|---|
|Requisito Associado |RF-003 	Sugerir lista de compras automáticas com base no plano de refeições escolhido|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT04 - Calculo IMC*                                        |
|---|---|
|Requisito Associado | RF-005 	Disponibilizar ferramenta para monitoramento do peso por meio do cálculo de IMC|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT05 - Relatórios*                                        |
|---|---|
|Requisito Associado |  RF-008 	Disponibilizar relatório diário, semanal e mensal|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 



Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você está acima do peso e não tem muito tempo para organizar uma dieta, quer um site que ofereça planos de refeições saudáveis, rápidos e personalizados, para que possa melhorar sua saúde, perder peso de forma sustentável e se alimentar melhor sem gastar muito tempo planejando. |
| 2             | Você é um atleta praticante de atividade física, quer um sistema de gestão de dieta que a ajude a planejar suas refeições, monitorar a ingestão de nutrientes e ajustar a alimentação conforme seu desempenho, para que ela possa atingir seus objetivos de performance e fazer o controle de meu IMC. |
| 3             | Você é um aposentado que fica a maior parte do meu tempo em casa, preciso de algo que seja direto e leve em consideração minhas condições de saúde em minha dieta, como tenho meus afazeres quero algo que me ajude a organizar as minhas compras para as refeições.. |



## Registro de Testes de Usabilidade

Cenário 1: Você está acima do peso e não tem muito tempo para organizar uma dieta, quer um site que ofereça planos de refeições saudáveis, rápidos e personalizados, para que possa melhorar sua saúde, perder peso de forma sustentável e se alimentar melhor sem gastar muito tempo planejando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 4                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 93%           | 4,6                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


O site facilita muito minha rotina com planos de refeições rápidos e bem organizados. Consegui montar uma dieta personalizada em poucos minutos e já comecei a seguir com facilidade. A navegação é direta e economiza meu tempo.


Cenário 2: Você é um atleta praticante de atividade física, quer um sistema de gestão de dieta que a ajude a planejar suas refeições, monitorar a ingestão de nutrientes e ajustar a alimentação conforme seu desempenho, para que ela possa atingir seus objetivos de performance e fazer o controle de meu IMC.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 4                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 86%           | 4.3                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


Gostei muito da forma como o sistema permite acompanhar meus nutrientes e ajustar minha alimentação conforme meus treinos. As ferramentas são precisas, e os gráficos de desempenho ajudam a visualizar meus avanços. Excelente para quem leva a dieta a sério.


Cenário 3: Você é um aposentado que fica a maior parte do meu tempo em casa, preciso de algo que seja direto e leve em consideração minhas condições de saúde em minha dieta, como tenho meus afazeres quero algo que me ajude a organizar as minhas compras para as refeições.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 86%           | 4.3                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


O site é bem claro e fácil de usar. As recomendações respeitam minhas restrições de saúde e alimentares, e a função de organizar a lista de compras com base nas refeições foi muito útil para meu dia a dia. Me senti bem assistido.


## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.





