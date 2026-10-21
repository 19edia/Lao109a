# HRISTE BOZE · Deepwoken

Bot Discord, painel administrativo, portal de membros e carteiras HB-ID. Identidade amarela e preta. Esta entrega foi feita em uma cópia separada; a pasta original foi preservada.

## Testar sem configurar nada

Abra **TESTE-HRISTE-BOZE.html**, na pasta acima de projeto. Qualquer usuário e senha entram na demonstração. Os dados ficam apenas no navegador, sem conexão com Discord ou banco real. Use os controles de tryout, cadastro, carteira e simulação do prazo.

Outra opção, com Node instalado: execute `npm run demo` nesta pasta e abra http://127.0.0.1:4173. Este servidor serve somente os arquivos públicos.

## Regras escolhidas

- Avaliador Discord: **1480009495915659494**. Os nicks são consultados no servidor.
- Aprovação: participante tira **50% ou mais** da vida do avaliador.
- Cadastro obrigatório: **48 horas após aprovação**.
- Acesso do aprovado é provisório até concluir o cadastro vinculado ao próprio Discord.
- Sem cadastro no prazo: reprovação por prazo, retirada dos cargos gerenciados e aviso por DM.
- A porcentagem é informada pelo avaliador; não há leitura automática de vida dentro do jogo.

## Fluxo real

1. Execute **/criar** no Discord. O bot atualiza a estrutura, guarda todos os IDs no banco e publica o painel de tryout.
2. O participante clica no painel. O bot cria um canal privado com participante e avaliador. Cliques repetidos recuperam o tryout em andamento.
3. O avaliador recebe o link da avaliação com ambos os nicks preenchidos. A página também está em **/tryout** para a equipe autorizada.
4. Entre no painel real com sua conta da equipe e confirme o Discord **1480009495915659494** em **Meu Discord**. Só o avaliador vinculado pode registrar o resultado.
5. Informe um número entre 0 e 100. A comparação com 50% é automática e o resultado é publicado no canal.
6. Se aprovado, o bot concede acesso provisório e envia o link pessoal do cadastro e o painel de membros. O participante confirma seu Discord por código privado, preenche os dados e cria a senha.
7. O cadastro concluído mantém o acesso e permite emitir a carteira. Caso expire, o sistema registra a reprovação, remove o acesso e tenta avisar por DM. Falhas de Discord ficam registradas para reenvio no painel.

O prazo fica no banco e é conferido pelo bot; após uma interrupção, os vencimentos são processados na retomada. A aplicação precisa permanecer ligada para executar as ações no Discord. A remoção de cargos não depende do sucesso da mensagem privada.

Se o canal privado for apagado ou sua criação falhar, clicar novamente no painel recupera a tentativa em andamento. Ao sair e voltar ao servidor, o bot recalcula o acesso. Corrigir o nome ou a build de um membro mantém sua aprovação e atualiza a versão da carteira; trocar o Discord exige uma nova admissão.

## Configuração e execução

1. Instale Node 22.12+ e rode `npm ci`.
2. Copie **.env.example** para **.env** e preencha token do bot, PostgreSQL, segredo de sessão e administrador inicial. Nenhum segredo foi incluído na entrega.
3. Em produção use `NODE_ENV=production`, `APP_ORIGIN=https://seu-dominio` e PostgreSQL com `sslmode=verify-full`. APP_ORIGIN precisa ser acessível aos participantes para os links funcionarem.
4. Ative **Server Members Intent** do bot e instale com os escopos **bot** e **applications.commands**. Deixe Interactions Endpoint URL vazio, pois o bot recebe interações pelo Gateway.
5. Dê ao bot Gerenciar canais, Gerenciar cargos, Ver canais, Enviar mensagens, Incorporar links, Anexar arquivos, Ler histórico, Conectar e Falar. Gerenciar servidor permite renomear o servidor; Criar convite permite guardar o convite. Posicione seu cargo acima dos cargos gerenciados.
6. Rode `npm start`. O schema é atualizado automaticamente, preservando as contas existentes. Execute uma instância do bot.
7. Execute **/criar** como dono/administrador do servidor e confirme o inventário devolvido pelo bot.

Para Render, o blueprint está em **render.yaml**. Build: `npm ci --omit=dev`; start: `npm start`; health check: **/health**. Prefira um serviço que permaneça ativo para cumprir os prazos.

### Variáveis do tryout

| Variável | Valor desta entrega |
|---|---|
| TRYOUT_EVALUATOR_DISCORD_ID | 1480009495915659494 |
| TRYOUT_PASS_PERCENT | 50 |
| TRYOUT_REGISTRATION_HOURS | 48 |

ALLIANCE_INVITE_URL é opcional; nenhum parceiro é presumido pela nova identidade.

## /criar e IDs

A configuração salva canais, categorias, cargos e servidor no estado persistido. Recursos reconhecidos são atualizados; IDs de recursos ausentes são substituídos pelos novos. Repetir o comando recupera uma configuração interrompida sem duplicar a estrutura conhecida. Em atualização, os antigos DIV_1_* podem servir como referência inicial; depois os IDs salvos no banco prevalecem. A estrutura gerenciada é atualizada sem excluir canais pessoais ou históricos.

Membros que já estavam verificados e possuíam conta ativa no portal são preservados por um registro único da migração. Isso não cria resultados de tryout e não inclui cadastros posteriores. Uma nova tentativa reprovada ou expirada prevalece sobre essa preservação. Membros antigos sem cadastro completo passam pelo fluxo de tryout e confirmação.

## Carteiras e painéis

- **/membros**: conta do membro, carteira, mural e atendimentos.
- **/painel**: equipe, membros, convites, avisos, embeds e operações.
- **/tryout**: fila e avaliações exclusivas do avaliador vinculado.
- **/ver-sua-carteira**: envia a carteira do próprio titular por DM.
- HB-ID tem 16 dígitos e código de barras assinado; trocar o nome público não troca as chaves nem os identificadores existentes. Os nomes internos `idrkc` e `ifj` permanecem apenas para compatibilidade.

A demonstração aceita qualquer login. O sistema real continua exigindo senha, sessão, confirmação do Discord e verificação de autorização. Carteiras demonstrativas não são credenciais de produção.

## Verificação

`npm test` executa testes de APIs, banco, permissões, tryout e carteiras com Discord simulado. `npm run check` confere sintaxe. `npm run carteiras:exemplos` gera as carteiras ilustrativas em **../EXEMPLOS**. Resultados e limites estão em **VALIDACAO-HRISTE-BOZE.md**.

Canais privados usam permissões explícitas. Dono e contas com Administrator mantêm o acesso inerente do Discord: [documentação oficial de permissões](https://github.com/discord/discord-api-docs/blob/main/developers/topics/permissions.mdx).
