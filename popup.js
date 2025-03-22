document.addEventListener("DOMContentLoaded", () => {
    // Loads previously saved settings
    chrome.storage.local.get(["blackout", "remove", "rainbow"], (settings) => {
        document.getElementById("blackout").checked = settings.blackout || false;
        document.getElementById("remove").checked = settings.remove || false;
        document.getElementById("rainbow").checked = settings.rainbow || false;
    });

    // Saves settings when "Apply" is clicked
    document.getElementById("save").addEventListener("click", () => {
        const blackout = document.getElementById("blackout").checked;
        const remove = document.getElementById("remove").checked;
        const rainbow = document.getElementById("rainbow").checked;

        chrome.storage.local.set({ blackout, remove, rainbow }, () => {
            alert("Settings saved. Refresh the page to see changes.");
        });
    });

    // Resets all settings and refresh the page
    document.getElementById("reset").addEventListener("click", () => {
        chrome.storage.local.clear(() => {
            alert("Settings reset. Refreshing page...");
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: () => location.reload()
                });
            });
        });
    });
});
