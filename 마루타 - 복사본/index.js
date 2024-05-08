const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector(".btn button");

function nextPage(){
    
    if(id.value==="ppsalho"&&pw.value==="pp0316"){
        window.open("index2.html", "_blank");
    }else{
        alert("비밀번호를 확인하세요!");
    }
    console.log(id.value,pw.value);
}

btn.addEventListener("click", nextPage);


