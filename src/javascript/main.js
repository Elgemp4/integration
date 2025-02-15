import '../css/style.css'
import reservation from './reservation'
import gallery from './gallery';

//Handle the execution of script depending on the rendered page
switch(window.location.pathname){
    case "/reservation":
        reservation();
        break;
    case "/gallery":
        gallery();
        break;
}