
let today = moment().format('MMMM Do YYYY');
let dayOfWeek = moment().format('dddd');
let thisHour = moment().hour();

let todoArray = [];

$('#current-day').text(dayOfWeek + ' ' + today);

for (i = 1; i < 25; i++) {
    if (parseInt($('#' + i).attr('id')) < thisHour) {
        $('#' + i).attr('style', 'background-color: #dddddd');
    } else if (parseInt($('#' + i).attr('id')) > thisHour) {
        $('#' + i).attr('style', 'background-color: #ffffff');
    } else {
        $('#' + i).attr('style', 'background-color: #fff78a')
    }
}

$('.save').on('click', function() {
    todoArray = [];

    for (i = 1; i < 25; i++) {
        let todoValue = $('#' + i).val();

        let todoObject = {
            todoHour: i,
            todoItem: todoValue
        }

        firebase.database().ref('data').set({todoArray});
        todoArray.push(todoObject);
}
})

$('#clear-button').on('click', function() {
    for (i = 1; i < 25; i++) {
        let todoValue = $('#' + i).val();
        $(todoValue).html('');

        let todoObject = {
            todoHour: "",
            todoItem: ""
        }
    }
    firebase.database().ref('data/').update({todoArray});
})

function loadTodos() {
    let storedTodos = JSON.parse(localStorage.getItem("todo"));
    console.log(storedTodos);

    if (storedTodos !== null) {
        for (i = 0; i < storedTodos.length; i++) {
            $('#' + storedTodos[i].todoHour).val(storedTodos[i].todoItem);
        };
    }
}

loadTodos();