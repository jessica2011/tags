var textFirst = document.querySelector('.first');
var textSecond = document.querySelector('.second');
var textThird = document.querySelector('.third');

function viewText(event) {
    var selection = event.target.dataset.selection;

    if (selection === 'one') {
        textThird.style.display = 'none';
        textSecond.style.display = 'none';
        textFirst.style.display = 'block';
    } else if (selection === 'two') {
        textThird.style.display = 'none';
        textSecond.style.display = 'block';
        textFirst.style.display = 'none';
    } else if (selection === 'tree') {
        textThird.style.display = 'block';
        textSecond.style.display = 'none';
        textFirst.style.display = 'none';
    }

}

function loadPage() {
    textFirst.style.display = 'none';
    textSecond.style.display = 'none';
    textThird.style.display = 'none';
    var tabs = document.getElementsByClassName('tab');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', viewText);
    }
}

loadPage();