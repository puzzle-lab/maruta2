const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const e = document.querySelector("#e");
const f = document.querySelector("#f");
const g = document.querySelector("#g");



function firstLoad(){
    setTimeout(firsttext, 1000);
    function firsttext(){
        const h1 = a.querySelector("h1");
        h1.innerText="안녕하세요!";
        h1.style.color = "black";
        if(h1.style.color==="black"){
            setTimeout(nextInput,2000);
            function nextInput(){
                h1.style.color = "white";
                setTimeout(end,1000);
                function end(){
                    b.classList.remove("hidden");
                    const firstForm = b.querySelector("form");
                    const firstInput = firstForm.querySelector("input");
                    firstInput.style.opacity = 1;
                }
            }
        }
    }
    
}


document.addEventListener('DOMContentLoaded', firstLoad);