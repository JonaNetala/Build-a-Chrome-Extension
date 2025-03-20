// Function to replace occurrences of 'coronavirus' with black squares or animations
function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
      if (element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(
          /(coronavirus)/gi, 
          '<span class="rainbow">$1</span>'
        );
        element.replaceWith(newElement);
      }
    }
  }
  
  // Executes the function on the document body
  replaceText(document.body);
  
  // Shows an alert when the extension runs
  alert('Chrome Extension Activated!');
  