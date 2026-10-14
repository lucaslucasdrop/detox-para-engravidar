/* =========================================================
   CONFIGURAÇÃO DO FUNIL — edite só este arquivo
   ========================================================= */
window.FUNIL = {
  // [DATA DO EVENTO] — data/hora REAL da aula ao vivo (fuso de Brasília: -03:00).
  // O contador e o prazo dos bônus usam esta data. Depois dela, os bônus somem da página sozinhos.
  eventoData: '2026-10-20T20:00:00-03:00',

  // Como a data aparece escrita na página
  eventoTexto: 'terça-feira, 20/10, às 20h',

  // Link do checkout (Hotmart, Kiwify, Eduzz, etc.)
  checkoutUrl: 'https://SEU-CHECKOUT-AQUI.com',

  // Parcelamento exibido abaixo do preço. Deixe '' para esconder.
  parcelasTexto: '',

  // Upsell / downsell — links de 1 clique da sua plataforma
  upsellAceitarUrl: 'https://LINK-1-CLIQUE-UPSELL.com',
  upsellRecusarUrl: 'downsell.html',
  upsellParcelasTexto: '',
  downsellAceitarUrl: 'https://LINK-1-CLIQUE-DOWNSELL.com',
  downsellRecusarUrl: 'https://SUA-PAGINA-DE-OBRIGADO.com',

  // CRN da Ana (aparece na assinatura da história)
  crnAna: 'CRN [NÚMERO]',

  // ID do Pixel da Meta. Deixe '' para não carregar.
  pixelId: ''
};
