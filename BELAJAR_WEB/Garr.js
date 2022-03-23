function barSwitch(){
    if (document.getElementById("bar-switch").checked) {
        document.getElementById('non-active').setAttribute('id', 'active');

    } else {
        document.getElementById('active').setAttribute('id', 'non-active');

    }
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000)

function changeTheme(){
    if(document.getElementById("switch-theme").checked){
        document.body.setAttribute("id", "darkmode-body");
        document.getElementById('menu-light').setAttribute('id', 'menu-dark');
        document.getElementById('nav-light').setAttribute('id', 'nav-dark');
        document.getElementById('change-theme').setAttribute('id', 'change-theme-dark');
        document.getElementById('welcome-eng-light').setAttribute('id', 'welcome-eng-dark');
        document.getElementById('welcome-jap-light').setAttribute('id', 'welcome-jap-dark');
        document.getElementById('text-light').setAttribute('id', 'text-dark');
        document.getElementById('line-light').setAttribute('id', 'line-dark');
        document.getElementById('text-eng-light').setAttribute('id', 'text-eng-dark');
        document.getElementById('slider-light').setAttribute('id', 'slider-dark');
        
    } else {
        document.body.setAttribute("id", "");
        document.getElementById('menu-dark').setAttribute('id', 'menu-light');
        document.getElementById('nav-dark').setAttribute('id', 'nav-light');
        document.getElementById('change-theme-dark').setAttribute('id', 'change-theme');
        document.getElementById('welcome-eng-dark').setAttribute('id', 'welcome-eng-light');
        document.getElementById('welcome-jap-dark').setAttribute('id', 'welcome-jap-light');
        document.getElementById('text-dark').setAttribute('id', 'text-light');
        document.getElementById('line-dark').setAttribute('id', 'line-light');
        document.getElementById('text-eng-dark').setAttribute('id', 'text-eng-light');
        document.getElementById('slider-dark').setAttribute('id', 'slider-light');


    }
}