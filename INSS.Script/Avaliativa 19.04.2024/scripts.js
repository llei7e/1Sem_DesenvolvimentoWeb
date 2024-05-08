cont = 1;


function addLine(){
    var nomeText = campoNome.value.trim();
    var cpfText = campoCpf.value.trim();
    var emailText = campoEmail.value.trim();

    if(nomeText != "" && cpfText != "" && emailText != "" ){
    var nomeInput = document.getElementById("campoNome").value;
    var cpfInput = document.getElementById("campoCpf").value;
    var emailInput = document.getElementById("campoEmail").value;

    // Nome
    var pNome =  document.createElement("p"); 
    pNome.setAttribute("id", "nome" + cont);
    pNome.textContent = nomeInput;
    document.getElementById("linhasTabela").appendChild(pNome);
    document.getElementById("nome" + cont).style.fontSize = "18px";
    document.getElementById("nome" + cont).style.paddingBottom = "3vh";
    document.getElementById("nome" + cont).style.paddingLeft = "4vw";
    

    
    // CPF
    var pCpf =  document.createElement("p"); 
    pCpf.setAttribute("id", "cpf" + cont);
    pCpf.textContent = cpfInput;
    document.getElementById("linhasTabela").appendChild(pCpf);
    document.getElementById("cpf" + cont).style.fontSize = "18px";
    document.getElementById("cpf" + cont).style.paddingLeft = "4vw";
    

    // Email
    var pEmail =  document.createElement("p"); 
    pEmail.setAttribute("id", "email" + cont);
    pEmail.textContent = emailInput;
    document.getElementById("linhasTabela").appendChild(pEmail);
    document.getElementById("email" + cont).style.fontSize = "18px";
    document.getElementById("email" + cont).style.paddingLeft = "4vw";


    // Botao editar
    var bEditar =  document.createElement("button"); 
    bEditar.setAttribute("id", "botao" + cont);
    bEditar.textContent = "Editar"
    document.getElementById("linhasTabela").appendChild(bEditar);
    document.getElementById("botao" + cont).style.width = "80px";
    document.getElementById("botao" + cont).onclick = editar;


    // Botao Apagar
    var bApagar =  document.createElement("button"); 
    bApagar.setAttribute("id", "botaoA" + cont);
    bApagar.textContent = "Apagar"
    document.getElementById("linhasTabela").appendChild(bApagar);
    document.getElementById("botaoA" + cont).style.width = "80px";
    document.getElementById("botaoA" + cont).onclick = apagar;

    document.getElementById("campoNome").value = "";
    document.getElementById("campoCpf").value = "";
    document.getElementById("campoEmail").value = "";
    

    cont++;
    }else
        window.alert("Insira todos os dados")
    
}

function apagar(){
    var entAlert = window.prompt("Digite a linha a ser apagada:");
    var linhaNum = parseInt(entAlert);

    document.getElementById("nome" + linhaNum).remove();
    document.getElementById("cpf" + linhaNum).remove();
    document.getElementById("email" + linhaNum).remove();
    document.getElementById("botao" + linhaNum).remove();
    document.getElementById("botaoA" + linhaNum).remove();

}

function editar(){
    var entAlert = window.prompt("Digite a linha a ser editada:");
    var linhaNum = parseInt(entAlert); 

    var dados = document.getElementById("nome" + linhaNum).value;

    document.getElementById("campoNome").value = dados;

}