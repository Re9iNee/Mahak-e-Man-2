/* START Token */
fetch(`/getToken/${packageNumber}`).then(resp => resp.json()).then(data => {
    if (data.result) {
        console.group("token.js")
        console.log("Recieved Token: ", '"' + data.token + '"')
        console.groupEnd()
        setCookie('Token', '"' + data.token + '"', 'mahaksoft.com', 3)
    } else {
        throw new Error("Result From Server were False, server message: ", data.message)
    }
}).catch(err => console.log("error While Recieving Token From Server: ", err))

function setCookie(cname, cvalue, cdomain, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    cdomain = `;domain=${cdomain}`
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + cdomain;
}
/* END Token */