function gerador(){
    var load2 = document.querySelector(".load2").style.display = "flex"
    $(".load2").fadeOut(1000)

    document.querySelector(".div-loading").style.display = "flex"
    $(".div-loading").fadeOut(7000)

    var select_1 = document.getElementById("select-1").value
    var select_2 = document.getElementById("select-pais").value
    var select_3 = document.getElementById("selectBanco").value

    
    if(select_1 == undefined || select_2 == undefined || select_1 == undefined){
        alert("as lacunas não pode ficar vazias")
    }else{
        if(select_3 == "BAI"){
            const padrao = 1000
            var numero = Math.floor(Math.random() * 999999999999)
            var numeros = padrao+""+numero
            getGerator(select_1, select_2,select_3,numeros, "")
        }
    
        if(select_3 == "BFA"){
            const padrao = 5002
            var numero = Math.floor(Math.random() * 999999999999)
            var numeros = padrao+""+numero
            getGerator(select_1, select_2,select_3,numeros, "")
        }
        if(select_3 == "BCA"){
            const padrao = 1234
            var numero = Math.floor(Math.random() * 999999999999)
    
            var numeros = padrao+""+numero
            getGerator(select_1, select_2,select_3,numeros, "")
        }
        if(select_3 == "BPC"){
            const padrao = 5002
            var numero = Math.floor(Math.random() * 999999999999)
            var numeros = padrao+""+numero
            getGerator(select_1, select_2,select_3,numeros, "")
        }
        if(select_3 == "SOL"){
            const padrao = 5021
            var numero = Math.floor(Math.random() * 999999999999)
            var numeros = padrao+""+numero
            getGerator(select_1, select_2,select_3,numeros, "")
        }
        if(select_3 == "MILENIUM"){
            const padrao = 5002
            var numero = Math.floor(Math.random() * 999999999999)
            var numeros = padrao+""+numero
            getGerator(select_1, select_2,select_3,numeros, "")
        }
    }
    verificate()
}


function verificate(){
    var select_1 = document.getElementById("select-1").value
    var select_2 = document.getElementById("select-pais").value
    var select_3 = document.getElementById("selectBanco").value

    if(select_1 == "MULTICAIXA"){
        document.querySelector("#vefication").innerHTML = "Cartão disponível"
        document.querySelector("#vefication").style.color = "rgb(103, 155, 0)"
    }else{
        document.querySelector("#vefication").innerHTML = "Cartão ainda não disponível"
        document.querySelector("#vefication").style.color = "red"
    }
    
    if(select_2 == "ANGOLA"){
        document.querySelector("#vefication2").innerHTML = "País disponível"
        document.querySelector("#vefication2").style.color = "rgb(103, 155, 0)"
    }else{
        document.querySelector("#vefication2").innerHTML = "País não disponível"
        document.querySelector("#vefication2").style.color = "red"
    }
    if(select_3 != ""){
        document.querySelector("#vefication3").innerHTML = "Banco disponível"
        document.querySelector("#vefication3").style.color = "rgb(103, 155, 0)"
    }else{
        document.querySelector("#vefication3").innerHTML = "Banco não disponível"
        document.querySelector("#vefication3").style.color = "red"
    }
    
}

const getGerator = (cartão,pais,banco,numero, cvv)=>{
    var pin = Math.floor(Math.random() * 9999)
    var cvv = cvv
    var dinheiro = 0
    const time = new Date()
    var date =time.getDay()+"/"+time.getMonth() +"/202"+Math.floor(Math.random() * 9)

    if(cvv == undefined ){
        document.querySelector("#idbanco").innerHTML = banco
        document.querySelector("#tcartao").innerHTML = cartão
        document.querySelector("#paises").innerHTML = pais

        document.querySelector("#numerog").innerHTML = numero
        document.querySelector("#ping").innerHTML = pin
        document.querySelector("#cvvg").innerHTML = cvv
        document.querySelector("#datag").innerHTML = date
    }else{
        document.querySelector("#idbanco").innerHTML = banco
        document.querySelector("#tcartao").innerHTML = cartão
        document.querySelector("#paises").innerHTML = pais

        document.querySelector("#numerog").innerHTML = numero
        document.querySelector("#ping").innerHTML = pin
        document.querySelector("#cvvg").innerHTML = "O cartão não possue o código cvv"
        document.querySelector("#datag").innerHTML = date
    }

}


