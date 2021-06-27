const table = document.querySelector(".tableTasks");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
        getTasks();
        document.querySelector(".btn").innerHTML = "Закрыть";
        createAnimate();
    } else {
        createAnimate();
        setTimeout(deleteTable, 500)
        document.querySelector(".btn").innerHTML = "Открыть";
    }
})

function deleteTable () {
    table.innerHTML = "";
}

function getTasks() {
    fetch('/tasks')
        .then(response => response.json())
        .then(response => {
            createTable(response)
        })
}

function createAnimate() {
    table.classList.toggle("active");
}

function createTable(data) {
    let lines = `<tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Time</th>
                            <th>Start</th>
                            <th>Finish</th>
                         </tr>`;
    for (let i = 0; i < data.length; i++) {
        let dateStart = (data[i].date_start).slice(0, 10);
        let dateFinish = (data[i].date_finish).slice(0, 10);
        lines += `<tr>
                            <td>${data[i].task_id}</td>
                            <td>${data[i].description}</td>
                            <td>${data[i].time}</td>
                            <td>${dateStart}</td>
                            <td>${dateFinish}</td>
                          </tr>`;
    }
    table.innerHTML = lines;
}
