chrome.tabs.executeScript({
    code: `
    <script type="text/javascript" charset="utf-8" src="https://www.sefaria.org/linker.js"></script>
	<script>
	    sefaria.link();
	</script>
    `
});