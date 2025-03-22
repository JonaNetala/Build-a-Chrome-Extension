// Loads settings and apply effects conditionally
chrome.storage.local.get(["blackout", "remove", "rainbow"], (settings) => {
    // If any feature is enabled, sets background to red
    if (settings.blackout || settings.remove || settings.rainbow) {
        document.body.style.backgroundColor = "red";
    } else {
        // If reset, clears the background
        document.body.style.backgroundColor = "";
    }

    function replaceText(element) {
        if (element.hasChildNodes()) {
            element.childNodes.forEach(replaceText);
        } else if (element.nodeType === Text.TEXT_NODE) {
            if (element.textContent.match(/coronavirus/gi)) {
                if (settings.remove) {
                    element.parentElement.remove();
                } else if (settings.blackout) {
                    const newElement = document.createElement("span");
                    newElement.innerHTML = element.textContent.replace(
                        /(coronavirus)/gi,
                        '<span style="background-color: black; color: black;">$1</span>'
                    );
                    element.replaceWith(newElement);
                } else if (settings.rainbow) {
                    const newElement = document.createElement("span");
                    newElement.innerHTML = element.textContent.replace(
                        /(coronavirus)/gi,
                        '<span class="rainbow">$1</span>'
                    );
                    element.replaceWith(newElement);
                }
            }
        }
    }

    replaceText(document.body);
});