# omelo.market — site inicial

## Arquivos
- `index.html`: conteúdo e estrutura do site.
- `styles.css`: visual preto e laranja, responsivo.
- `script.js`: filtros por categoria e aviso dos botões demonstrativos.
- `favicon.svg`: ícone do site.

## Antes de publicar
1. Substitua os cards de exemplo por produtos reais que você conferiu.
2. Atualize título, descrição, categoria, imagem, preço (ou “Confira o preço”) e botão.
3. Troque o destino do botão pelo link de afiliado gerado oficialmente na plataforma da Shopee, se a conta e a mídia estiverem aprovadas.
4. Não invente preço antigo, desconto, avaliação, estoque ou urgência. Confira preço e condições na página do produto.
5. Mantenha o aviso de transparência sobre links de afiliado e a declaração de independência.
6. Confira as regras atuais da Shopee sobre mídias cadastradas, links, marcas e conteúdo permitido antes de divulgar.
7. Não publique dados pessoais. Se você for menor de idade, respeite os requisitos etários do programa; não use dados de terceiros para contornar a regra.

## Como adicionar um produto
No `index.html`, copie um bloco `<article class="product-card" ...>...</article>` dentro de `.product-grid`.
- `data-category` deve ser `tech`, `casa`, `moda` ou `dia-a-dia`.
- Atualize o texto e a arte visual.
- No botão, substitua `class="product-button demo-link" href="#como-usar"` por `class="product-button" href="SEU_LINK_DE_AFILIADO" target="_blank" rel="sponsored nofollow noopener"` e mantenha o rótulo transparente.
- Para usar uma imagem real, troque a `<div class="product-visual ...">` por uma imagem `<img class="product-photo" src="CAMINHO-DA-IMAGEM" alt="Descrição do produto">` e adicione ao CSS `.product-photo{width:100%;height:155px;object-fit:contain;background:#202020;padding:12px}` (também adapte o tamanho no mobile).
- Use imagens que você tem autorização para divulgar; não extraia imagens em massa nem use marcas/logotipos como se o site fosse oficial.

## Publicação gratuita (GitHub Pages)
1. Crie uma conta no GitHub com dados verdadeiros e respeite os requisitos de idade da plataforma; se precisar, peça ajuda a um responsável.
2. Crie um repositório público chamado `omelo-market` (ou outro nome disponível).
3. Envie os quatro arquivos deste projeto para a raiz do repositório.
4. Nas configurações do repositório, abra **Pages** e escolha publicar a partir do branch principal (`main`) e da pasta raiz (`/root`).
5. Salve e aguarde o GitHub mostrar o endereço publicado.
6. Teste no celular: navegação, categorias, links e legibilidade.
7. Para usar `omelo.market` como domínio, registre-o se estiver disponível e configure o domínio personalizado nas configurações do Pages e no provedor do domínio. O nome não está reservado por este projeto.

Este site é um modelo estático. Ele não consulta automaticamente os preços nem importa produtos da Shopee. Atualize as ofertas manualmente e confira os termos do programa periodicamente.
