import * as Elisha from './ElishaAPI';
import * as Icon from './IconManager';

import { IMessage } from '../../ClientConnector/src/interfaces/models/message.model';

const NotificationsDictionary: { [notificationId: string]: IMessage } = {};

export function createNotification(message: IMessage) {

    // Creating notificationaccording to the message details
    chrome.notifications.create({
        title: message.title,
        message: message.content,
        type: 'basic',
        iconUrl: message.iconSrcUrl,
        isClickable: true
    },
        notificationId => NotificationsDictionary[notificationId] = message);
}

chrome.notifications.onClicked.addListener((notificationId: string) => {

    const message = NotificationsDictionary[notificationId];

    if (!message) { return; }

    if (message.link) {

        chrome.tabs.create({
            url: message.link,
            active: true
        }, (tab) => {

            if (!tab) {
                chrome.windows.create({
                    url: message.link,
                    focused: true
                });
            } else {
                chrome.windows.update(tab.windowId, {
                    focused: true
                });
            }
        });
    }

    chrome.notifications.clear(notificationId, (isCleared: boolean) => {
        if (isCleared) {
            Elisha.Instance().Message.markMessageAsRead(message._id);
            delete NotificationsDictionary.notificationId;
        }
    });
});
