var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');
for(item of btn){
    item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
    if(btntext == '×'){
        btntext= '*';
    }
    if(btntext == '÷'){
        btntext= '/';
    }
     if(btntext != 'ENTER' && btntext != 'del' && btntext != 'ans' && btntext != 'clear' && btntext != '✓' && btntext != '±')
         screen.value += btntext;
    });
}

function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}

function signChange(){
    if(screen.value[screen.value.length-1] == '+'){
        backspc();
        screen.value +='-';
    }
    else {
        backspc();
        screen.value +='+';
    }
}