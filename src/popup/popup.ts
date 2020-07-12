window.onload = function () { return sendPopupOpenStateEvent(true); };
window.onunload = function () { return sendPopupOpenStateEvent(false); };
function sendPopupOpenStateEvent(isOpen) {
    var extension = chrome.extension.getBackgroundPage();
    console.log(isOpen);
    
    extension.dispatchEvent(new CustomEvent("popupOpenState", { detail: { isOpen: isOpen } }));
}
const popupFrame = document.getElementById('popupFrame') as HTMLIFrameElement;
// popupFrame.src = "https://" + SERVER_PATH + "/Client";