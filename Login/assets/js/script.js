
const usuarioPerm = "llei7e";
const senhaPerm = "123456";


const botao = document.querySelector('#enviar');

botao.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.querySelector('#senha').value;
    
    if (usuario ===  usuarioPerm && senha === senhaPerm){
        alert("Bem Vindo")
        window.location.assign("redirect.html");
    }else if (usuario ===  usuarioPerm && senha != senhaPerm){
        alert("Senha Incorreta!!")
        window.location.assign("index.html");
    }else{
        alert("Usuario e Senha Incorretos!!")
        window.location.assign("index.html");
    }


})

