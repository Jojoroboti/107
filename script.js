(async function(){
    const infotext = document.getElementById("infotext");
    const params = new URLSearchParams(window.location.search);
    const key    = params.get('t');
    if (!key) {
        infotext.textContent = 'There was no target provided.';
            return;
    }

    try {
        const url  = `https://raw.githubusercontent.com/Jojoroboti/107/main/mapping.json?t=${Date.now()}`;
        const resp = await fetch(url, { cache: 'no-store' });
        if (!resp.ok) throw new Error(`Fetch-Fehler: ${resp.status}`);
        const mapping = await resp.json();

        const dest = mapping[key];
        if (dest) {
            infotext.textContent = 'Joining...';
            window.location.replace(dest);
        } else {
            infotext.textContent = `Target „${key}“ not found.`;
        }
    } catch (e) {
        console.error('Redirect-Fehler:', e);
        infotext.textContent = 'An unknown error occured. Please try again later.';
    }
})();