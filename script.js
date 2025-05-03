(async function(){
  const params = new URLSearchParams(window.location.search);
  const key    = params.get('t');
  if (!key) {
    document.body.textContent = 'Kein Zielparameter angegeben.';
    return;
  }

  try {
    const url  = `https://raw.githubusercontent.com/Jojoroboti/107/main/mapping.json?t=${Date.now()}`;
    const resp = await fetch(url, { cache: 'no-store' });
    if (!resp.ok) throw new Error(`Fetch-Fehler: ${resp.status}`);
    const mapping = await resp.json();

    const dest = mapping[key];
    if (dest) {
    //   document.body.textContent = 'Weiterleitung …';
      window.location.replace(dest);
    } else {
      document.body.textContent = `Ziel „${key}“ nicht gefunden.`;
    }
  } catch (e) {
    console.error('Redirect-Fehler:', e);
    document.body.textContent = 'Ein Fehler ist aufgetreten. Bitte später erneut versuchen.';
  }
})();