const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorDiv = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    var nomeUsuario = usernameInput.value;

    // Verifique se o nome de usuário e a senha estão corretos
    if (username === 'Hebert' && password === '88268772'){ 
        alert("Bem vindo!!"  + "\n" + usernameInput.value);
        window.location.replace("./form.html");        
}
    else if (username === 'Douglas' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else if (username === 'Tales' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else if (username === 'supervisao' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else if (username === 'supervisaogeral' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else if (username === 'producao' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else if (username === 'lojamatriz' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else if (username === 'financeiro' && password === '102030'){ 
        alert("Bem vindo!!"+ usernameInput);
        window.location.replace("./form.html");
        
    }
    else if (username === 'diretoria' && password === '102030'){ 
        alert("Bem vindo!!" + "\n" + usernameInput.value);
        window.location.replace("./form.html");
        
    }
    else{
        alert("Usuario ou senha incorreto");
    } 

})





// Adiciona um evento de clique ao botão
form.addEventListener('onclick', (event) => {
    event.preventDefault();

    window.close();
        
})


