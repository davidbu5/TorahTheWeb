window.onload = function () { return sendPopupOpenStateEvent(true); };
window.onunload = function () { return sendPopupOpenStateEvent(false); };
function sendPopupOpenStateEvent(isOpen) {
    var extension = chrome.extension.getBackgroundPage();
    extension.dispatchEvent(new CustomEvent("popupOpenState", { detail: { isOpen: isOpen } }));
}
const popupFrame = document.getElementById('popupFrame');
var SERVER_PATH="localhost";
popupFrame.src = "https://" + SERVER_PATH + "/Client";