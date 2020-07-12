window.onload = function () { return sendPopupOpenStateEvent(true); };
window.onunload = function () { return sendPopupOpenStateEvent(false); };
function sendPopupOpenStateEvent(isOpen) {
    var extension = chrome.extension.getBackgroundPage();
    extension.dispatchEvent(new CustomEvent("popupOpenState", { detail: { isOpen: isOpen } }));
}
const downloadExtentionLinkTag = document.getElementById('downloadExtensionLink');
var SERVER_PATH="localhost";
downloadExtentionLinkTag.href = "https://" + SERVER_PATH + "/ChromeExtension/extension.crx";