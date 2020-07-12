import * as Icon from './IconManager';

export let isPopupOpen = false;

export function initPopupEvent() {
    
    addEventListener('popupOpenState', (event: CustomEvent) => {
        // Can put statistics here
    });
}
