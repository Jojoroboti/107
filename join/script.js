(async () => {
    const infotext = document.getElementById("infotext");
    const params = new URL(window.location).searchParams;
    const key = params.get("b") || params.get("j");
    if (params.get("f")) {
        window.location.replace(`roblox://experiences/start?placeId=4639625707&gameInstanceId=${params.get("f")}`)
    }

    if (!key) {
        infotext.textContent = "There was no target provided.";
        return;
    }
    const type = params.has("b") ? "b" : "j";
    const url = `https://raw.githubusercontent.com/Jojoroboti/107/main/${type}.json?t=${Date.now()}`;

    try {
        const resp = await fetch(url, { cache: "no-store" });
        if (!resp.ok) throw new Error(`Fetch-Fehler: ${resp.status}`);
        const mapping = await resp.json();
        const dest    = mapping[key];

        if (dest) {
            infotext.textContent = "Joining...";
            window.location.replace(dest);
        } else {
            infotext.textContent = `Target „${key}“ not found.`;
        }
    } catch (err) {
        console.error(err);
        infotext.textContent = err.message;
    }
})();