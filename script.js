(async function(){
  const params = new URLSearchParams(window.location.search);
  const key    = params.get('target');           // z. B. ?target=promo
  if (!key) return;                              // kein Redirect-Param → nichts tun

  try {
    // mapping.json von deinem Pages-Server laden
    const resp    = await fetch('/mapping.json');
    if (!resp.ok) throw new Error('Mapping nicht gefunden');
    const mapping = await resp.json();

    const dest = mapping[key];
    if (dest) {
      // optional: Kurze Loading-Message anzeigen, dann weiterleiten
      document.body.innerHTML = 'Weiterleitung…';
      window.location.replace(dest);
    }
  } catch (e) {
    console.error('Redirect-Fehler:', e);
  }
})();