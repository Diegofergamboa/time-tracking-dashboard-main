// import the data from json file
// Organize the divs

// fetch
document.addEventListener("ONContentLoaded", 
    loadDailyActivity()
);    

function getActivity () {
    const url = "../data.json";
    
    return fetch(url)
    .then(response => {
        return response.json();
    }).then((result) => {
        return result
    }).catch((err) => {
        console.log('Error on Fetch Function');
    });
}


async function loadDailyActivity() {
    const objectActivities = await getActivity();

    const activities = objectActivities.map(activity => {
        return ` 
                <div class="container-task" style="background-image:url('${activity.image}'); background-color: var(${activity.color})">
                <div class="div-task">
                <div class="div-task-p">
                <p class="div-task-p-title">${activity.title}</p>
                <p class="div-task-p-current">${activity.timeframes.daily.current}hrs</p>
                </div>
                <div class="progress">
                <img class="progress-image"src="/images/icon-ellipsis.svg" alt="imagen de puntos suspensivos">
                <p class="progress-p">Last Daily - ${activity.timeframes.daily.previous}</p>
                </div> 
                </div>
                </div>
                `
    });
    const container = document.getElementsByClassName("section-tasks");
    container[0].innerHTML = activities.join('');
}
async function loadWeeklyActivity() {
    const objectActivities = await getActivity();

    const activities = objectActivities.map(activity => {
        return ` 
                <div class="container-task" style="background-image:url('${activity.image}'); background-color: var(${activity.color})">
                <div class="div-task">
                <div class="div-task-p">
                <p class="div-task-p-title">${activity.title}</p>
                <p class="div-task-p-current">${activity.timeframes.weekly.current}hrs</p>
                </div>
                <div class="progress">
                <img class="progress-image"src="/images/icon-ellipsis.svg" alt="imagen de puntos suspensivos">
                <p class="progress-p">Last Daily - ${activity.timeframes.weekly.previous}</p>
                </div> 
                </div>
                </div>
                `
    });
    const container = document.getElementsByClassName("section-tasks");
    container[0].innerHTML = activities.join('');
}
async function loadMonthlyActivity() {
    const objectActivities = await getActivity();

    const activities = objectActivities.map(activity => {
        return ` 
                <div class="container-task" style="background-image:url('${activity.image}'); background-color: var(${activity.color})">
                <div class="div-task">
                <div class="div-task-p">
                <p class="div-task-p-title">${activity.title}</p>
                <p class="div-task-p-current">${activity.timeframes.monthly.current}hrs</p>
                </div>
                <div class="progress">
                <img class="progress-image"src="/images/icon-ellipsis.svg" alt="imagen de puntos suspensivos">
                <p class="progress-p">Last Daily - ${activity.timeframes.monthly.previous}</p>
                </div> 
                </div>
                </div>
                `
    });
    const container = document.getElementsByClassName("section-tasks");
    container[0].innerHTML = activities.join('');
}

