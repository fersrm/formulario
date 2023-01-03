const from = document.getElementById("fromulario");
const inputValue = document.getElementsByClassName("btn");
const card= document.getElementById("card");

from.addEventListener("submit", e =>{
    e.preventDefault()
    const valorActivo = document.querySelector('input[name="status"]:checked');
    if(valorActivo){
        card.innerHTML= '<div class="enviado">'+
                            '<div class="imgenviado">'+
                                '<img src="images/illustration-thank-you.svg" alt="enviado">'+
                            '</div>'+
                            '<h2 class="env">You selected '+valorActivo.value+' out of 5</h2>'+
                            '<h2>Thank you!</h2>'+
                            '<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>'
                        '</div>';
    }else{
        alert("Selecione un numero")
    }
});
