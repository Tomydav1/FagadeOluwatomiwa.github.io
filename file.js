const btn  = document.querySelectorAll('button');
const disp_input = document.querySelector('.input-disp');
const disp_output = document.querySelector('.output-disp');

let input = '';

for (let key of btn){
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if(value == 'clear'){
            input = '';
            disp_input.value = '0';
            disp_output.value = '';
            disp_input.classList.remove('input');
            disp_input.classList.remove('in');
        }

        else if( value == 'delete') {
            input = input.slice(0, -1);
            disp_input.value = input;
            disp_input.classList.remove('in');

            if(disp_input.value == 0){
                disp_input.value = 0;
            }
        }

        else if(value == '='){
            try{
                let result = eval(input)
                disp_output.value = result;

                console.log(result);
                
                disp_input.classList.add('input');

                if(result == undefined){
                    disp_output.value = 0;
                    disp_input.value = 'No result';
                }
            }

            catch{
                disp_input.value = 'error';
                disp_input.classList.remove('input');
                disp_output.value = '';
                disp_input.classList.add('in');
            }
        }

        else{
            input += value;
            disp_input.value = input;
            disp_input.classList.remove('in');
        }
    })
}


let usermode = window.matchMedia('(prefers-color-scheme: dark)');
let userchoice = usermode.matches;

let html = document.querySelector('html');

let mode = document.querySelector('#mode')

let darkmode = userchoice;

function darkmodeattribute(){
    if(darkmode){
        html.setAttribute('data-dark-mode', 'true');
    } else{
        html.removeAttribute('data-dark-mode');
    }
}

function modeicon(){
    if(darkmode){
        mode.src = 'image/light.svg';
    } else {
        mode.src = 'image/dark.svg';
    }
}

darkmodeattribute();
modeicon();

function darkmodetoggle(){
    darkmode = !darkmode;
    darkmodeattribute();
    modeicon();
}

mode.addEventListener('click', darkmodetoggle);
