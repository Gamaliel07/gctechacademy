document.getElementById('msg_tel').style.display = 'none';
function celular(params) {
    return navigator.userAgent.match(/Android | iphone | movile/i)
}


document.getElementById("telefono").addEventListener('click',(e)=>{

    if(celular()==null){
        e.preventDefault()
        document.getElementById('msg_tel').style.display = 'block';

    }
    else
        document.getElementById('msg_tel').style.display = 'none';
});

