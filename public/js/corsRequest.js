// Create the XHR object
function sendCORSRequest(method, url, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/ Firefox/ Opera/ Safari
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS is not supported
        xhr = null;
    }
    if (!xhr) {
        console.log("CORS not supported");
        return;
    }
    xhr.onload = onLoad;
    xhr.onerror = onError;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}
