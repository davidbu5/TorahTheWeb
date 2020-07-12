
import * as Icon from './modules/IconManager';
import * as Notifications from './modules/NotificationsManager';
import * as Popup from './modules/PopupManager';
import * as ExtensionUpdates from './modules/ExtensionUpdateManager';
import * as Authentication from './src/modules/Authentication';

function init(userName: string) {

    Popup.initPopupEvent();
    ExtensionUpdates.startUpdateCheckIntervalHandling();
    Notifications.createNotification(message);

    Icon.setBadgeText(newUnreadCount);

    Icon.updateUnreadCount();
}
