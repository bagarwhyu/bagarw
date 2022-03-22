var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000)

var header = getElementById('.header')


function changeTheme(){
    if(document.getElementById("switch-theme").checked){
        document.body.setAttribute("id", "darkmode-body");
        document.getElementById('header').setAttribute('id', 'darkmode-header');
        document.getElementById('nav-light').setAttribute('id', 'nav-dark');
        document.getElementById('change-theme').setAttribute('id', 'change-theme-dark');
        document.getElementById('slider-light').setAttribute('id', 'slider-dark');
        document.getElementById('welcome-eng-light').setAttribute('id', 'welcome-eng-dark');
        document.getElementById('welcome-jap-light').setAttribute('id', 'welcome-jap-dark');
        document.getElementById('text-light').setAttribute('id', 'text-dark');
        document.getElementById('line-light').setAttribute('id', 'line-dark');
        document.getElementById('text-eng-light').setAttribute('id', 'text-eng-dark');


    } else {
        document.body.setAttribute("id", "");
        document.getElementById('darkmode-header').setAttribute('id', 'header');
        document.getElementById('nav-dark').setAttribute('id', 'nav-light');
        document.getElementById('change-theme-dark').setAttribute('id', 'change-theme');
        document.getElementById('slider-dark').setAttribute('id', 'slider-light');
        document.getElementById('welcome-eng-dark').setAttribute('id', 'welcome-eng-light');
        document.getElementById('welcome-jap-dark').setAttribute('id', 'welcome-jap-light');
        document.getElementById('text-dark').setAttribute('id', 'text-light');
        document.getElementById('line-dark').setAttribute('id', 'line-light');
        document.getElementById('text-eng-dark').setAttribute('id', 'text-eng-light');

    }
}