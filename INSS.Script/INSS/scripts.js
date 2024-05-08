var salBruto = document.getElementById("bruto").value;
var numDep = document.getElementById("dependentes").value;
var valorPorDep = 189.59;
var totalDep;
var salMenosInss = 0;
var salLiquido = 0;
var irrf = 0;


function calc(){
    salBruto = document.getElementById("bruto").value;
    numDep = document.getElementById("dependentes").value;

    var inssValue = parseFloat(calcInss()).toFixed(2);
    document.getElementById("inss").value = inssValue;
    salMenosInss = salBruto - inssValue;


    var irrfValue = parseFloat(calcIrrf()).toFixed(2);
    document.getElementById("irrf").value = parseFloat(irrfValue).toFixed(2);
    
    salLiquido = salMenosInss - irrfValue;
    document.getElementById("liquido").value = parseFloat(salLiquido).toFixed(2);
}

function calcInss(){
    if(salBruto < 1412){
        return salBruto * 0.075;
    }else if(salBruto < 2666.68){
        return (salBruto * 0.09) - 21.18;
    }else if(salBruto < 4000.03){
        return (salBruto * 0.12) - 101.18;
    }else if(salBruto < 7786.02){
        return (salBruto * 0.14) - 181.18;
    }else if (salBruto > 7786.02){
        return 908.85;
    }
}

function calcIrrf(){
    valorPorDep = 189.59;
    totalDep = numDep * valorPorDep;

    if(salMenosInss < 2259.20){
        return 0;
    }else if (salMenosInss < 2826.64){
        irrf = (salMenosInss * 0.075) - 169.44;
        return irrf;
    }
    else if (salMenosInss < 3751.05){
        irrf = (salMenosInss * 0.15) - 381.44;
        return irrf;
    }
    else if (salMenosInss < 4664.68){
        irrf = ((salMenosInss - totalDep) * 0.225) - 662.77;
        return irrf;
    }else{
        irrf = (salMenosInss * 0.275) - 896.00;
        return irrf;
    }
}