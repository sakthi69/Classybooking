function validatename(){
    if(document.getElementById("name").value.length<2){
        document.getElementById("valname").innerHTML="Invalid";
    }
    else{
        document.getElementById("valname").innerHTML="";
    }
}

function validateemail(){
    if(!document.getElementById("mail").value.includes("@gmail.com")){
        document.getElementById("valmail").innerHTML="Invalid";
    }
    else{
        document.getElementById("valmail").innerHTML="Valid";
    }
}

function validatephone(){
    if(document.getElementById("phone").value.length!=10){
        document.getElementById("valphone").innerHTML="Invalid";
    }
    else{
        document.getElementById("valphone").innerHTML="";
    }
}

function validatepass(){
    if(document.getElementById("passengers").value==0){
        document.getElementById("valpassengers").innerHTML="Invalid";
    }
}

function submission(){
    var a=document.getElementById("name").value;
    // var b=document.getElementById("")
    alert(a);
}

function valaddd(){
    if(document.getElementById("ap").value==document.getElementById("ad").value){
        document.getElementById("valad").innerHTML="Invalid";
    }
    else{
        document.getElementById("valad").innerHTML="";
    }

}