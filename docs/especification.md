# Especificações do Projeto

Este projeto tem como objetivo desenvolver uma aplicação web, para auxiliar pessoas que estão iniciando uma dieta alimentar na gestão eficiente de sua alimentação, permitindo que alcancem melhores resultados sem a necessidade de acompanhamento constante de um profissional. Para isso, serão utilizados técnicas e ferramentas como diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto.

## Personas

| EU COMO PERSONA      | QUERO/PRECISO FUNCIONALIDADE                          | PARA MOTIVAR/VALOR               |
|----------------------|------------------------------------------------------ |----------------------------------|
| Patrícia, 26 anos, assistente comercial, está acima do peso, usa Facebook e Instagram para buscar informações sobre saúde. | Ter um método eficaz para emagrecer e melhorar sua alimentação, e receber conteúdos relevantes e práticos sobre dieta |  Ter um estilo de vida saudável, e fazer uma dieta sem perder tempo e manter a motivação. |
| Fernando de 28 anos, Analista de TI e triatleta amador, treina 6 dias por semana (corrida, ciclismo e natação).| Melhorar a performance esportiva e otimizar a alimentação para recuperação muscular, e entender conceitos básicos de nutrição, para ajustes na dieta. | Monitorar a evolução do peso e da composição corporal, evitar fadiga e lesões por má alimentação, e garantir ingestão adequada de calorias e macros para suportar os treinos.|
| Amanda, 30 anos, técnico em Contabilidade, deseja ter uma vida saudável, faz acompanhamento nutricional. | Quero algo para centralizar minhas refeições, bem como um gerenciamento melhor da dieta e objetivos. | Acompanhar minhas medidas corporais, peso, e fotos do início e do final de cada ciclo. |
|Marco Paulo, 24 anos, operador de caixa em uma rede de supermercados, têm intolerâncias ao glúten e a lactose.| Personalizar uma dieta para necessidades específicas, e se interessa por receitas adaptadas de acordo com sua intolerância, e conhecer maneiras práticas e rápidas para preparo de refeições. | Ter uma alimentação saudável e controlada, e ter acesso a refeições adequadas à suas necessidades alimentícias, de acordo com o seu paladar.|

## Histórias de Usuários

- Pedro, como alguém que está acima do peso e não tem muito tempo para organizar uma dieta, quer um site que ofereça planos de refeições saudáveis, rápidos e personalizados, para que possa melhorar sua saúde, perder peso de forma sustentável e se alimentar melhor sem gastar muito tempo planejando.
- Lucina, como atleta e praticante de atividade física, quer um sistema de gestão de dieta que a ajude a planejar suas refeições, monitorar a ingestão de nutrientes e ajustar a alimentação conforme seu desempenho, para que ela possa atingir seus objetivos de performance e recuperação muscular.
- Rodrigo, sou aposentado e fico maior parte do meu tempo em casa, preciso de algo que seja direto e leve em consideração minhas codições de saúde em minha dieta, como tenho meus afazeres quero algo que me avise os horarios e os alimentos de cada refeição
- Luis Campos, passo boa parte do meu tempo em reuniões e trabalhando. Em diversos momentos, me perguntei onde está minha dieta, o que devo comer hoje, quantas gramas desse alimento devo colocar, busco algo onde eu possa centralizar estas informações e possa acessá-las de forma rápida.
- Maria Cleuza, como diabética, constantemente me pergunto quais alimentos posso comer e em quais quantidades devo consumir, são tantos portais de notícias e tantos profissionais de saúde, cada um falando uma coisa diferente que não sei onde encontrar informações confiáveis.

### Requisitos Funcionais
 
| ID      | DESCRIÇÃO DO REQUISITO                                                                                      | PRIORIDADE |
| ------- | ------------------------------------------------------------------------------------------------------------|----------- |
| RF-001  | Permitir cadastro de preferências alimentares (ex: vegetariano, low carb, sem glúten, etc.).                |MÉDIA       |
| RF-002  | Oferecer opções de refeições organizadas por complexidade levando em conta o tempo e preparo.               |ALTA        |
| RF-003  | Sugerir lista de compras automáticas com base no plano de refeições escolhido.                              |MÉDIA       |
| RF-004  | Fornecer informações nutricionais claras das refeições (calorias, proteínas, carboidratos, etc.).           |ALTA        |
| RF-005  | Disponibilizar ferramenta para monitoramento do peso por meio do cálculo de IMC (índice de Massa Corporal). |MÉDIA       |
| RF-006  | Oferecer ferramenta para calcular a quantidade de carboidratos, proteínas e gorduras da dieta.              |MÉDIA       |
| RF-007  | Disponibilizar agenda semanal para organização das refeições descritos na dieta (café, almoço, jantar).     |ALTA        |
| RF-008  | Fornecer um sistema de inventário de alimentos integrado com as refeições diárias.                          |MÉDIA       |
| RF-009  | Disponibilizar um relatório dos alimentos consumidos diário, semanal e mensal.                              |BAIXA       |

### Requisitos não Funcionais

| ID      | DESCRIÇÃO DO REQUISITO                                     | PRIORIDADE |
| ------- | ---------------------------------------------------------- |----------- |
| RNF-001	| O sistema deve ser multiplataforma. (celular e computador) |MÉDIA       |
| RNF-002 | A interface deve ser simples e intuitiva                   |ALTA        |
| RNF-003 | O desenvolvimento deve ser em Javascript; HTML e CSS.      |ALTA        |
| RNF-004 | O sistema deve funcionar on-line.                          |ALTA        |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID  | Restrição                                                            |
|----|--------------------------------------------------------------------- |
|01  | O projeto deverá ser entregue até o final do semestre.               |
|02  | Não pode ser desenvolvido um módulo de backend.                      |
|03  | Não é permitido fazer uso de framework para desenvolver o front-end. |


