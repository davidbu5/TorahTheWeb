
import * as Elisha from './src/modules/ElishaAPI';
import * as Icon from './modules/IconManager';
import * as Notifications from './modules/NotificationsManager';
import * as Popup from './modules/PopupManager';
import * as ExtensionUpdates from './modules/ExtensionUpdateManager';
import * as Authentication from './src/modules/Authentication';

function init(userName: string) {

    Popup.initPopupEvent();
    ExtensionUpdates.startUpdateCheckIntervalHandling();
    Elisha.init(userName);

    Elisha.Instance().Updates.onNewMessage.subscribe(message => {
        Notifications.createNotification(message);
    });
    
    Elisha.Instance().Updates.onConnectionStateChanged.subscribe(isConnected => {
        if (isConnected) {
            Icon.updateUnreadCount();
        }
    });
    
    Elisha.Instance().Updates.onUnreadMessagesCountChanged.subscribe(newUnreadCount => {
        Icon.setBadgeText(newUnreadCount);
    });
    
    Icon.updateUnreadCount();
}

Authentication.Authenticate().then(recievedUserName => {
    if (recievedUserName) {
        init(recievedUserName);
    }
});
