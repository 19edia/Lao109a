# Validação da entrega HRISTE BOZE

Entrega local em 20/10/2026, dentro da pasta copiada HRISTE-BOZE-DEEPWOKEN-2026-10-15.

## Preservação e conteúdo

- Comparação SHA-256 dos 165 arquivos da pasta original: **0 arquivos alterados**. O inventário está em `../original-sha256.json`.
- Estrutura gerenciada: 11 categorias, 36 canais de texto, 8 canais de voz e 14 cargos.
- Site, portal, embeds e carteiras com identidade HRISTE BOZE em amarelo e preto.
- HTML portátil: `../TESTE-HRISTE-BOZE.html`, com CSS e JavaScript incorporados, sem instalação ou dependências externas para abrir.
- Compilação sintática dos 63 arquivos JavaScript de src, public e scripts aprovada; reconstrução do HTML portátil aprovada.

## Cobertura automatizada

Os testes usam PostgreSQL embarcado via PGlite, requisições HTTP reais ao Express e Discord simulado. Nenhuma mensagem foi enviada ao servidor real.

- Aprovação em 50%, reprovação em 0% e 49,99%, aceitação de 100% e rejeição de valores inválidos.
- Acesso exclusivo do avaliador confirmado, token do link, origem e CSRF; reenvio idempotente do mesmo resultado.
- Canal privado com permissões explícitas, nomes obtidos do Discord e link automático do avaliador.
- Convite obrigatório vinculado ao participante; outro Discord não pode usá-lo. Login por carteira ou cadastro legado não pula essa etapa.
- Cadastro concluído confirma acesso; 48 horas sem cadastro revogam acesso e sessões, com aviso por DM independente da remoção de cargos.
- Recuperação após reinício, retorno ao servidor e exclusão do canal privado.
- Reconciliação de canais/cargos e persistência dos novos IDs pelo `/criar`.
- Carteiras reais: renderização e leitura do código de barras em PNG, JPEG, WebP, recorte, redimensionamento e rotação; recusa de assinatura, titular ou revisão inválidos.
- Proteção dos painéis e sessões; manutenção dos identificadores e senhas existentes na migração.

Foram executados **246 testes** na suíte completa: 245 passaram e um ainda comparava a mensagem antiga “Entre no distrito”. Essa expectativa foi atualizada para “Entre na guilda”, e o conjunto afetado foi reexecutado com **8/8 aprovados**. Não restaram falhas conhecidas. Os registros originais das execuções estão em `teste-final.log` e `teste-staff-final.log`.

Os **16 testes específicos de tryout passaram**, incluindo restauração do acesso provisório após `/criar`, permissões após reinício sem cache e isolamento do vencimento de uma tentativa do servidor anterior. A execução geral é sequencial para reduzir a pressão dos módulos WebAssembly no ambiente Windows.

## Conferência visual e demonstração

Foram conferidos no navegador: login livre da demonstração, aprovação no limite de 50%, cadastro obrigatório, criação da carteira, frente e verso e download SVG. As prévias do acesso administrativo e as cinco carteiras ilustrativas estão em `../EXEMPLOS/`.

O controle do navegador foi desativado nas configurações do Work durante a conclusão. Por isso, a última rodada não concluiu uma nova inspeção visual da simulação de expiração e do layout móvel da demonstração. O fluxo real de expiração está coberto pelos testes automatizados.

## Ativação e limites

- O bot não foi conectado a Discord/PostgreSQL de produção. Preencha `.env`, inicie a aplicação e execute `/criar` conforme o README.
- Qualquer login funciona apenas no HTML demonstrativo. O painel real continua protegido.
- O avaliador informa o dano; a aplicação compara a porcentagem com o mínimo. Não há captura da vida dentro do Deepwoken.
- O processo deve permanecer ligado para cumprir o prazo no Discord. Após parada, os vencimentos são processados quando o bot retorna.
- DMs bloqueadas pelo usuário não podem ser entregues; a falha fica registrada e o cadastro também é disponibilizado no canal privado.
- Dono e administradores do Discord conservam suas permissões próprias. Os cargos gerenciados de acesso não recebem Administrator.

As carteiras da pasta EXEMPLOS e as do HTML de teste são ilustrativas, sem validade no bot de produção.
