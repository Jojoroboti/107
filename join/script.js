(async () => {
    const subtitle = document.getElementById("subtitle");
    const params = new URLSearchParams(window.location.search);
    if (params.get("f")) {
        window.location.replace(`roblox://experiences/start?placeId=4639625707&gameInstanceId=${params.get("f")}`);
        subtitle.textContent = "Joining...";
    }
)();

