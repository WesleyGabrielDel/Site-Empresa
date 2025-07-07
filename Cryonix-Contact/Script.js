function enviar_msg(){
    if(document.getElementById('Message').value == "" || document.getElementById('Topic').value == ""){
        alert('Escreva obrigatório a escrita do Tópico e Mensagem!');
    } else {
        alert('Mensagem enviada com sucesso!');
    }
}