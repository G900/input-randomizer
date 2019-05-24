var target
document.body.addEventListener('mousedown', e => {
    if (e.button == 2) {
        target = e.target
    }
});
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    var value
    switch (msg.itemId) {
        case 'first-name':
            value = chance.first();
            break;
        case 'last-name':
            value = chance.last();
            break;
        case 'email':
            value = chance.email();
            break;
        case 'mobile-number':
            value = chance.phone({formatted: false});
            break;
        case 'word':
            value = chance.word();
            break;
        case 'paragraph':
            value = chance.paragraph();
            break
        default:
            value = 'hello'
    }

    target.value = value;

});


