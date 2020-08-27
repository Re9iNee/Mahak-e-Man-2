console.group("getScore.js")
let body = {
    packageNumber
}
fetch("/getScore", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
    }
}).then(resp => resp.text()).then(score => {
    document.getElementById("score").textContent = score
}).catch(err => console.log("Error While getting Score:  ", err))
console.groupEnd()