
export function setBadgeText(text: string | number) {

    if (typeof text === 'number') {
        
        if (text === 0) {
            
            chrome.browserAction.setBadgeText({ 
                text: ''
            });
        } else {
            
            chrome.browserAction.setBadgeText({ 
                text: JSON.stringify(text)
            });
        }
    }
}

chrome.browserAction.setBadgeBackgroundColor({
    color: 'orange'
});

chrome.browserAction.setPopup({
    popup: 'popup.html'
});
