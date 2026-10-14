# Como colocar o funil no ar

## Arquivos
- `index.html` — quiz (link do anúncio aponta pra cá)
- `vendas.html` — página de vendas (o quiz manda pra cá com `?perfil=...`)
- `upsell.html` / `downsell.html` — páginas pós-compra
- `assets/config.js` — **único arquivo que você precisa editar**
- `img/` — coloque as fotos aqui

## 1. Edite `assets/config.js`
- `eventoData` / `eventoTexto` → data REAL da aula ao vivo
- `checkoutUrl` → link do checkout
- `upsellAceitarUrl` / `downsellAceitarUrl` → links de 1 clique da plataforma
- `downsellRecusarUrl` → página de obrigado
- `pixelId` → ID do Pixel da Meta
- `crnAna` → CRN da Ana

## 2. Coloque as fotos em `img/` (com estes nomes)
- `aluna-cha-revelacao.jpg` (quiz + topo da página de vendas)
- `lucia.jpg`
- `ana.jpg`

Enquanto a foto não existir, aparece uma caixa tracejada indicando o que vai ali.

## 3. Troque os placeholders no `vendas.html`
Busque por `placeholder` e `[` — prints de depoimentos reais, depoimento da Lucia, desfecho da história da Ana, CNPJ e links de política/termos.

## 4. Na plataforma de checkout
- Página pós-compra → `upsell.html`
- Order bumps (Kit Sucos e Chás R$19,90 e Diário do Ciclo R$27) são configurados **dentro do checkout** — o texto está em `../funil-detox-para-engravidar.md`, seção 3.

## 5. Publicar
Sobe a pasta `site/` inteira em qualquer hospedagem estática (Netlify, Vercel, Hostinger, cPanel). Os UTMs do anúncio são repassados automaticamente do quiz até o checkout.

## Eventos do Pixel
- `PageView` em todas as páginas
- `ViewContent` ao começar o quiz e ao abrir a página de vendas
- `Lead` ao ver o resultado do quiz
- `InitiateCheckout` ao clicar em qualquer botão de compra
- `Purchase` → configure na plataforma de checkout

## Depois da data do evento
Os bônus, a aula, o contador e a barra do topo somem sozinhos e o total da ancoragem é recalculado. Pra abrir nova turma, é só trocar a data no `config.js`.
