(async function(){
  const params = new URLSearchParams(window.location.search);
  const key    = params.get('target');
  if (!key) return;

  try {
    const url = `https://raw.githubusercontent.com/Jojoroboti/107/main/mapping.json?t=${Date.now()}`;
    const resp = await fetch(url, { cache: 'no-store' });
    if (!resp.ok) throw new Error(`Fehler: ${resp.status}`);
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