(async () => {
    const infotext = document.getElementById("infotext");
    const params = new URLSearchParams(window.location.search);
    const key = params.get("b") || params.get("j");
    if (params.get("f")) {
        window.location.replace(`roblox://experiences/start?placeId=4639625707&gameInstanceId=${params.get("f")}`)
    }
)();
