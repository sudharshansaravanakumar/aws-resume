window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const fuctionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(fuctionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").n=innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

