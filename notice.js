(async () => {
  try {
    const res = await fetch('notice.html', { cache: 'no-cache' });
    if (!res.ok) return;
    const html = await res.text();

    const top = document.getElementById('notice-top');
    const bottom = document.getElementById('notice-bottom');

    if (top) top.innerHTML = html;
    if (bottom) bottom.innerHTML = html;
  } catch (e) {
    // silent fail
  }
})();