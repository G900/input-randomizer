chrome.runtime.onInstalled.addListener(function () {
    var context = "editable"
    chrome.contextMenus.create({
        "title": "first name", "contexts": [context],
        "id": "first-name"
    });

    chrome.contextMenus.create({
        "title": "last name", "contexts": [context],
        "id": "last-name"
    });

    chrome.contextMenus.create({
        "title": "email", "contexts": [context],
        "id": "email"
    });

    chrome.contextMenus.create({
        "title": "mobile number", "contexts": [context],
        "id": "mobile-number"
    });

    chrome.contextMenus.create({
        "title": "word", "contexts": [context],
        "id": "word"
    });
    chrome.contextMenus.create({
        "title": "paragraph", "contexts": [context],
        "id": "paragraph"
    });
});

chrome.contextMenus.onClicked.addListener(onClickHandler);


function onClickHandler(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content.js"}, function () {
            chrome.tabs.sendMessage(tabs[0].id, {itemId: info.menuItemId}, function (response) {});
        });
    });
};


