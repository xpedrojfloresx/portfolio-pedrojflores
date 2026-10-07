import Lenis from 'lenis';

(function () {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var lenis = null, rafId = null;

  function isReload() {
    var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    if (nav) return nav.type === 'reload';
    return !!(performance.navigation && performance.navigation.type === 1);
  }
  function headerOffset() {
    var header = document.querySelector('.navbar');
    return header ? header.offsetHeight : 0;
  }
  function raf(time) { if (lenis) lenis.raf(time); rafId = requestAnimationFrame(raf); }
  function startLenis() {
    if (lenis || typeof Lenis === 'undefined') return;
    lenis = new Lenis({
      lerp: 0.1, smoothWheel: true, syncTouch: false, wheelMultiplier: 1,
      // Shift+rueda = scroll horizontal nativo (carruseles, pestañas)
      virtualScroll: function (data) { return !data.event.shiftKey; },
      // El menú móvil abierto conserva su scroll nativo
      prevent: function (node) { return node.id === 'navbarNavAltMarkup' && node.scrollHeight > node.clientHeight + 1; }
    });
    window.lenis = lenis;
    rafId = requestAnimationFrame(raf);
  }
  function stopLenis() {
    if (!lenis) return;
    cancelAnimationFrame(rafId); lenis.destroy(); lenis = null; window.lenis = null;
  }
  function focusTarget(target) {
    var heading = target.matches('h1,h2') ? target : target.querySelector('h1,h2');
    if (!heading) return;
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
  function goToHash(hash, push) {
    if (!hash || hash === '#') return;
    var target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    var offset = -headerOffset();
    if (lenis) {
      // React monta el contenido después de crear Lenis: recalcular el alto antes de saltar
      lenis.resize();
      lenis.scrollTo(target, { offset: offset, onComplete: function () { focusTarget(target); } });
    } else {
      var top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: top, behavior: 'auto' });
      focusTarget(target);
    }
    if (push) history.pushState(null, '', hash);
  }
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href^="#"]');
    if (!link) return;
    var hash = link.getAttribute('href');
    if (!hash || hash === '#' || !document.getElementById(decodeURIComponent(hash.slice(1)))) return;
    event.preventDefault();
    goToHash(hash, true);
  });
  window.addEventListener('hashchange', function () { goToHash(location.hash, false); });
  reducedMotion.addEventListener('change', function (e) { if (e.matches) stopLenis(); else startLenis(); });
  function init() {
    if (!reducedMotion.matches) startLenis();
    if (isReload()) {
      window.scrollTo(0, 0);
      if (location.hash) history.replaceState(null, '', location.pathname + location.search);
      return;
    }
    if (location.hash) requestAnimationFrame(function () { goToHash(location.hash, false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
