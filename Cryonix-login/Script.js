function login(){
    if(document.getElementById('Email').value == "" || document.getElementById('Tel').value == "" || document.getElementById('Name').value == ""){
        alert('Obrigatório o preenchimento de cada informação!');
    }
    else if(document.getElementById('Email').value == "admin@gmail.com" && document.getElementById('Name').value == "admin"){
        location.href = '../Index.html';
        alert('Login efetuado com sucesso!');
    }
    else {
        alert('Usuário ou senha incorretos!');
    };
}