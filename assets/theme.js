// Theme: light by default, dark when the viewer picks it (remembered on this device)
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  function label() {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☀ 라이트 · Light' : '🌙 다크 · Dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }
  if (!btn) return;
  label();
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('amc-theme', next); } catch (e) {}
    label();
  });
})();
