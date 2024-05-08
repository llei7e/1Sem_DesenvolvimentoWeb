function alterarTexto(){
   // var objeto = document.getElementsByTagName("p")[0];
    //objeto.innerText = "Olá DOM";

    //document.getElementById("hello").innerHTML = "Hello ID";
    //document.getElementsByClassName("dom")[0].innerText = "Hello Class";

    document.querySelector("p").innerHTML = "Query Selector";
    document.querySelector("#hello").innerHTML = "Query Selector ID";
    document.querySelector(".dom").innerHTML = "Query Selector Class";

    var novo = document.createElement("p");
    novo.textContent = "Novo Parágrafo";
    novo.style.backgroundColor = "lightgreen";
    novo.style.fontFamily = "Comic Sans MS"
    document.body.appendChild(novo);

    ntabela += "<table>";

    ntabela +=   "<tr>";
    ntabela +=       "<td>ID</td>";
    ntabela +=       "<td>CLASS</td>";
    ntabela +=   "</tr>";
    

    ntabela +=   "<tr>";
    ntabela +=       "<td>1</td>";
    ntabela +=       "<td>lleite</td>";
    ntabela +=   "</tr>";

    ntabela += "</table>";
    
    var ntabela = document.createElement("table");
    var linha1 = document.createElement("tr");
    var l1col1 = document.createElement("td");
    var l1col2 = document.createElement("td");
    var linha2 = document.createElement("tr");
    var l2col1 = document.createElement("td");
    var l2col2 = document.createElement("td");

    var cell11 = document.createTextNode("ID") ;
    var cell12 = document.createTextNode("Name");
    var cell21 = document.createTextNode("1");
    var cell22 = document.createTextNode("lleite");

    l1col1.appendChild(cell11);
    l1col2.appendChild(cell12);
    l2col1.appendChild(cell21);
    l2col2.appendChild(cell22);

    linha1.appendChild(l1col1);
    linha1.appendChild(l1col2);
    linha2.appendChild(l2col1);
    linha2.appendChild(l2col2);

    ntabela.appendChild(linha1);
    ntabela.appendChild(linha2);

    ntabela.style.border = "10px solid #000";
    l1col1.style.border = "10px solid #000";
    l1col2.style.border = "10px solid #000";
    l2col1.style.border = "10px solid #000";
    l2col2.style.border = "10px solid #000";


    document.body.appendChild(ntabela);
    
    var span = document.createElement("span");
    span.innerHTML = tabela;
    document.appendChild(span);


}