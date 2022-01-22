// import the data from json file
// Organize the divs

// fetch

document.addEventListener("DOMContentLoaded" , () => {
    loadActivity();
});

const task = document.getElementsByClassName('div-task');

function getActivity () {
    const url = "/data.json";
    return fetch(url)
    .then(response => {
        return response.json();
    }).then((result) => {
        return result;
    }).catch((err) => {
        console.log('ERROR CON FETCH FUNCTION');
    });
}
async function loadActivity() {
    const activities = await getActivity();
    let html = '';
    activities.forEach(activity => {
        html += `
            <div></div>
            <div></div>
        `
    });(activity => {

    })