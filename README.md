# 🛡️ CREA330 Module 5 Project - Coronavirus Immunity Chrome Extension

Welcome to the **Coronavirus Immunity** extension — a Chrome tool built to protect users from the overwhelming presence of the word *coronavirus* across the web. Whether you want to *black it out*, *completely remove it*, or *highlight it with flair*, this extension gives you full control.

This project is the official submission for the **CREA330 Module 5 Assignment** and goes beyond the base requirements by introducing a full user interface, multiple toggleable display options, and even a **reset button** to return the web page to its original state.



## 📌 Project Overview

The **Coronavirus Immunity** extension is a customizable content filter for Chrome that modifies how the term "coronavirus" appears on any web page.

It features:
- 🌓 **Blackout mode**: Redacts the word 'coronavirus' visually.
- 💥 **Remove mode**: Erases entire paragraphs containing the word.
- 🌈 **Animate mode**: Applies a vivid rainbow animation.
- 🔄 **Reset mode**: Clears all visual modifications and restores the original page style.

Users control all effects via an intuitive **popup settings menu**.



## ⚙️ Features

### 🧪 Word & Paragraph Customization
- ✅ **Blackout Words**: Replaces the word "coronavirus" with black text on a black background.
- ✅ **Remove Paragraphs**: Removes any entire paragraph that contains the word.
- ✅ **Animate Words**: Highlights occurrences of the word "coronavirus" with a continuous rainbow animation.

### 🎛️ Interactive Extension Popup
- ✅ **Checkbox Toggles**: Choose effects dynamically through the popup.
- ✅ **Apply Button**: Save settings to Chrome storage and see changes instantly (after page refresh).
- ✅ **Reset Button**: Disables all toggles and reverts the web page to its original state.

### 🌍 Applied Across All Websites
- The extension activates automatically on **every page visited** and applies changes in real time.



## 📂 File Structure

```bash
📦 Coronavirus-Immunity-Extension/
├── manifest.json         # Chrome extension manifest file (v3)
├── popup.html            # Popup interface HTML
├── popup.js              # Popup logic for saving and resetting settings
├── background.js         # Handles message passing & Chrome storage sync
├── content.js            # Injected into webpages to modify content
├── styles.css            # Styling for animation & blackout
├── icon.png              # Extension icon (optional)
└── README.md             # This documentation
```



## 🛠️ Technologies Used

- ✅ HTML & CSS  
- ✅ JavaScript (Vanilla)  
- ✅ Chrome Extension API (Manifest V3)  
- ✅ DOM Manipulation & Recursion  
- ✅ Chrome Storage Sync & Local  



## 🚀 How to Install & Use

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/JonaNetala/Coronavirus-Immunity-Extension.git
cd Coronavirus-Immunity-Extension
```

### 2️⃣ Load into Chrome
1. Go to `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the project folder

### 3️⃣ Test It Out
1. Visit a website containing the word “coronavirus”  
2. Click the extension icon  
3. Choose how you'd like to modify the word  
4. Click **Apply**  
5. Refresh the page to see the effect  
6. Click **Reset** to undo changes and remove red background



## 🌈 Design Highlights

### 🧠 JavaScript Logic
- ✅ Recursive DOM traversal to find and modify text nodes
- ✅ Dynamic element replacement using `innerHTML`
- ✅ Live toggling between multiple visual effects

### 💅 CSS Styling
- `.rainbow` class defines animated color transitions
- Use of `!important` for background overrides (optional)
- Supports easy future customization for other terms

### 🧩 Popup UI
- Responsive layout styled inlined with HTML
- Simple checkboxes and buttons
- Dynamically syncs settings to and from Chrome storage



## ✨ Reset Function

One key improvement:
> 🔄 **Reset Button** that completely **removes all visual effects**, including the **red background**, giving users full control over appearance with a single click — **no need to disable the extension manually**.



## 💡 Reflection

Through this project, I learned:
- 🔧 How to use **Chrome's manifest v3**, content scripts, and storage APIs.
- 🔄 Implementing **state persistence** between popup.js and content.js.
- 🧠 Crafting recursive logic to find and modify deep text nodes.
- 💻 Debugging and testing browser-based extensions across multiple websites.
- 🎯 Designing clean UI/UX interactions for browser extensions.

I was especially proud of introducing:
- A fully interactive **popup interface**
- The **reset feature** to eliminate the need for toggling the extension off
- Seamless integration between storage, popup interface, and content script logic



## 📸 Submission Guidelines

When recording your walkthrough:
- 🎤 **Intro** — explain your extension’s purpose
- 💻 **Code Tour** — show how each file contributes (popup, content, manifest, background)
- 🌍 **Live Demo** — test it on real sites like CDC, Wikipedia, PBS
- 🧠 **Reflect** — discuss challenges (e.g., recursion, background removal, toggle logic)



## 📚 References & Resources

- 📄 Module 5 Assignment Prompt (CREA330)
- 🔧 [Chrome Developer Docs](https://developer.chrome.com/docs/extensions/)
- 🎨 [MDN Web Docs - Text Node Manipulation](https://developer.mozilla.org/)
- 🧪 Peer testing and iteration through multiple web environments



## ✅ Final Thoughts

This project was a fun and empowering experience, showcasing the real-world utility of Chrome Extensions in web content customization. With clean logic, extensibility, and full user control, this extension goes beyond the basic specs and shows thoughtful engineering in **both functionality and user experience**.



### 🔗 Project Repository

📁 GitHub Repo:  
[https://github.com/JonaNetala/Coronavirus-Immunity-Extension](https://github.com/JonaNetala/Coronavirus-Immunity-Extension)