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

const task = document.getElementsByClassName('div-task');
async function loadDailyActivity() {
    const objectActivities = await getActivity();
    const listTask = objectActivities.map(activity => {
        // console.log(activity.timeframes.daily)
        return  ` <div>
                    <p>${activity.title}</p>
                    <p>${activity.timeframes.daily.current}hrs</p>
                </div>
                <div>
                    <img src="/images/icon-ellipsis.svg" alt="imagen de puntos suspensivos">
                    <p>Last Daily - ${activity.timeframes.daily.previous}</p>
                </div>
                `
        })
        task[0].innerHTML = listTask.join('');
    }
//     });
//     document.getElementsByClassName("task")[0].innerHTML = html;
