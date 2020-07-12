import * as Icon from './IconManager';

export let isPopupOpen = false;

export function setUpdatePopup() {

}

export function initPopupEvent() {
    
    addEventListener('popupOpenState', (event: CustomEvent) => {
        // Icon.updateUnreadCount();
        // Can put statistics here
    });
}
