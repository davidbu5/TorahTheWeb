window.onload = function () { return sendPopupOpenStateEvent(true); };
window.onunload = function () { return sendPopupOpenStateEvent(false); };
function sendPopupOpenStateEvent(isOpen) {
    var extension = chrome.extension.getBackgroundPage();
    console.log(isOpen);

    extension.dispatchEvent(new CustomEvent("popupOpenState", { detail: { isOpen: isOpen } }));
}
const popupFrame = document.getElementById('popupFrame') as HTMLIFrameElement;
function injectSefaria() {
    if (document.getElementById('sefaria-import-script')) {
        return;
    }
    var sefariaImportScript = document.createElement('script')
    sefariaImportScript.setAttribute('type', 'text/javascript')
    sefariaImportScript.setAttribute('id', 'sefaria-import-script')
    sefariaImportScript.setAttribute('src', 'https://www.sefaria.org/linker.js')
    sefariaImportScript.onload = function () {
        var sefariaLinkScript = document.createElement('script')
        sefariaLinkScript.setAttribute('type', 'text/javascript')
        var inlineScript = document.createTextNode("console.log(sefaria.link());");
        sefariaLinkScript.appendChild(inlineScript);
        document.getElementsByTagName('body')[0].appendChild(sefariaLinkScript);
    }
    document.getElementsByTagName('body')[0].appendChild(sefariaImportScript);
}
// popupFrame.src = "https://" + SERVER_PATH + "/Client";
chrome.tabs.executeScript({
    code: `
    debugger;
    ${injectSefaria.toString()}
    injectSefaria();
    `
});