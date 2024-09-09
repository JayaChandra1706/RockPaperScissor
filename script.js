let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let messageBox=document.querySelector(".messageBox");
let myCounter=document.querySelector(".myCounter");
let comCounter=document.querySelector(".comCounter");
let refresh=document.querySelector(".refresh");

let myChoice;
let comChoice;

let myCount=localStorage.getItem("myCount");
let comCount=localStorage.getItem("comCount");

myCounter.innerText=myCount;
comCounter.innerText=comCount;

if(myCount==null){
    myCount=0;
    localStorage.setItem("myCount",myCount);
}

if(comCount==null){
    comCount=0;
    localStorage.setItem("comCount",comCount);
}

myCount=Number(localStorage.getItem("myCount"));
comCount=Number(localStorage.getItem("comCount"));

let computerChoice=()=>{
    let random=Math.floor(Math.random() * 3);
    if(random===0){
        comChoice="rock";
    }else if(random===1){
        comChoice="paper";
    }else{
        comChoice="scissor";
    }
};


rock.addEventListener("click",()=>{
    myChoice="rock";
    computerChoice();
    console.log(`myChoice: ${myChoice}`);
    console.log(`comChoice: ${comChoice}`);
    printWinner();
});

paper.addEventListener("click",()=>{
    myChoice="paper";
    computerChoice();
    console.log(`myChoice: ${myChoice}`);
    console.log(`comChoice: ${comChoice}`);
    printWinner();

});

scissor.addEventListener("click",()=>{
    myChoice="scissor";
    computerChoice();
    console.log(`myChoice: ${myChoice}`);
    console.log(`comChoice: ${comChoice}`);
    printWinner();
});


let winner;

let printWinner=()=>{
    switch(myChoice){
        case "rock":
            if(comChoice==="rock"){
                winner="draw";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,Match is Draw.`;
                messageBox.classList.remove("hide")
            }else if(comChoice==="paper"){
                winner="com";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,You Lost the Match.`;
                messageBox.classList.remove("hide")
            }else{
                winner="you";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,You won the Match.`;
                messageBox.classList.remove("hide")
            }
            checkCounter();
            break;
        case "paper":
            if(comChoice==="rock"){
                winner="you";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,You won the Match.`;
                messageBox.classList.remove("hide")
            }else if(comChoice==="paper"){
                winner="draw";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,Match is Draw.`;
                messageBox.classList.remove("hide")
            }else{
                winner="com";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,You Lost the Match.`;
                messageBox.classList.remove("hide")
            }
            checkCounter();
            break;
        case "scissor":
            if(comChoice==="rock"){
                winner="com";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,You Lost the Match.`;
                messageBox.classList.remove("hide")
            }else if(comChoice==="paper"){
                winner="you";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,You won the Match.`;
                messageBox.classList.remove("hide")
            }else{
                winner="draw";
                messageBox.innerText=`You Selected ${myChoice} and Computer Selected ${comChoice} So,Match is Draw.`;
                messageBox.classList.remove("hide")
            } 
            checkCounter();
            break;  
    }
}

let checkCounter=()=>{
    if(winner==="you"){
        myCount=Number(localStorage.getItem("myCount"));
        myCount++;
        localStorage.setItem("myCount",myCount);
        myCounter.innerText=myCount;
    }else if(winner==="com"){
        comCount=Number(localStorage.getItem("comCount"));
        comCount++;
        localStorage.setItem("comCount",comCount);
        comCounter.innerText=comCount;
    }
}

refresh.addEventListener("click",()=>{
    myCount=0;
    localStorage.setItem("myCount",myCount);
    myCounter.innerText=myCount;
    comCount=0;
    localStorage.setItem("comCount",comCount);
    comCounter.innerText=comCount;
    messageBox.classList.add("hide");
})



