// import the data from json file
// Organize the divs

// fetch
document.addEventListener("ONContentLoaded", 
    // getActivity() 
    loadDailyActivity()
);

// loadMonthlyActivity();
// loadWeeklyActivity();

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
    let html = '';
    const activities = objectActivities.map(activity => {
        return ` 
                <div class="container-task">
                <div class="div-task">
                    <p>${activity.title}</p>
                    <p>${activity.timeframes.daily.current}hrs</p>
                    <div class="progress">
                    <img src="/images/icon-ellipsis.svg" alt="imagen de puntos suspensivos">
                    <p>Last Daily - ${activity.timeframes.daily.previous}</p>
                    </div> 
                </div>
                `
    });
    const container = document.getElementsByClassName("section-tasks");container[0].innerHTML = activities.join('');
}
    


