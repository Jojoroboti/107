(async function(){
  const params = new URLSearchParams(window.location.search);
  const key    = params.get('target');
  if (!key) return;

  try {
    const resp    = await fetch('/mapping.json');
    if (!resp.ok) throw new Error('Mapping nicht gefunden');
    const mapping = await resp.json();

    const dest = mapping[key];
    if (dest) {
      document.body.innerHTML = 'Weiterleitung…';
      window.location.replace(dest);
    }
  } catch (e) {
    console.error('Redirect-Fehler:', e);
  }
})();