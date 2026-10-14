/* Funções compartilhadas: Pixel, repasse de UTMs, data do evento */
(function () {
  var F = window.FUNIL || {};

  // ---- Pixel da Meta ----
  if (F.pixelId) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', F.pixelId);
    fbq('track', 'PageView');
  }

  window.track = function (evento, dados) {
    try { if (window.fbq) fbq('track', evento, dados || {}); } catch (e) {}
  };

  // ---- Repassa UTMs e parâmetros da URL atual para o próximo link ----
  window.comParametros = function (url, extras) {
    try {
      var destino = new URL(url, location.href);
      new URLSearchParams(location.search).forEach(function (v, k) {
        if (!destino.searchParams.has(k)) destino.searchParams.set(k, v);
      });
      if (extras) Object.keys(extras).forEach(function (k) { destino.searchParams.set(k, extras[k]); });
      return destino.toString();
    } catch (e) { return url; }
  };

  // ---- Evento ao vivo ----
  window.eventoPassou = function () {
    var d = new Date(F.eventoData);
    return !isNaN(d) && Date.now() > d.getTime();
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-evento]').forEach(function (el) { el.textContent = F.eventoTexto; });
  });
})();
