function getLinkDownloadGgDrive(input) {
    const BASE_URL = "https://drive.google.com/uc?export=download&id="
    var result = BASE_URL + input;
    document.getElementById("myInput").value = result;
}
function getLinkViewGgDrive(input) {
    const BASE_URL = "https://drive.google.com/uc?export=view&id="
    var result = BASE_URL + input;
    document.getElementById("myInput2").value = result;
}
function splitLink() {
    var dataInput = document.getElementById("link").value;
    var url = dataInput.split('/');
    var resultID = url[url.length - 2];
    getLinkDownloadGgDrive(resultID)
}
function splitLink2() {
    var dataInput = document.getElementById("view").value;
    var url = dataInput.split('/');
    var resultID = url[url.length - 2];
    getLinkViewGgDrive(resultID)
}
function copyText(that) {
    var copyText = that.closest('form').querySelector('.form__field2'); 
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}