// import the data from json file
// Organize the divs

// fetch
document.addEventListener("ONContentLoaded", 
    loadDailyActivity() 
);

// loadMonthlyActivity();
// loadWeeklyActivity();
// loadDailyActivity();

getActivity ()
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
async function loadDailyActivity() {
    const activities = await getActivity();
    let html = '';
    activities.forEach(activity => {
        html += `
            <div>
                <p>${activity.title}</p>
                <p>${activity.current}hrs</p>
            </div>
            <div>
                <img src="/images/icon-ellipsis.svg" alt="imagen de puntos suspensivos">
                <p>Last Daily - ${activity.previous}</p>
            </div>
        `
    });
    document.getElementsByClassName("task")[0].innerHTML = html;
)})