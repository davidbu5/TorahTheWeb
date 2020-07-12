import * as Icon from './IconManager';

export let isPopupOpen = false;

export function initPopupEvent() {
    
    window.addEventListener('popupOpenState', (event: CustomEvent<{isOpen: boolean}>) => {
        console.log(event.detail.isOpen);
        
        // Can put statistics here
    });
}
