import * as Elisha from './ElishaAPI';

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

export function updateUnreadCount() {
    Elisha.Instance().Message.getMyMessagesUnreadCount().then(unreadCount => {
        setBadgeText(unreadCount);
    });
}

chrome.browserAction.setBadgeBackgroundColor({
    color: 'orange'
});

chrome.browserAction.setPopup({
    popup: 'popup.html'
});
