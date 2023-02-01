let board = [];
let basket = [];
let selectID=0

function addTask(){
    let entry = document.getElementById("txtTask").value;
    board.push(entry);
    disTaskNum(entry);
    document.getElementById("txtTask").value = "";
    updateTaskNum();
    
}

function disTaskNum(taskEntry){
    let task = `<li id="${selectID}">${taskEntry}<span class="del" onclick="delSelect(${selectID})">❌</span></li>`;
    const ul = document.getElementById("doList").innerHTML+=task;
}

function updateTaskNum(){
    document.getElementById("doTotal").innerHTML=board.length;
}

function buyItem(){
    let entry = document.getElementById("txtItem").value;
    basket.push(entry);
    disItemNum(entry);
    document.getElementById("txtItem").value = "";
    updateItemNum();

}

function disItemNum(itemEntry){
    let item = `<li id="${selectID}">${itemEntry}<span class="del" onclick="delBuy(${selectID})">❌</span></li>`;
    const ul = document.getElementById("buyList").innerHTML+=item;
}

function updateItemNum(){
    document.getElementById("buyTotal").innerHTML=basket.length;

}

function delSelect(id){
    document.getElementById(id).remove();
    board.splice(id,1);
    updateTaskNum();

}
function delBuy(id){
    document.getElementById(id).remove();
    basket.splice(id,1);
    updateItemNum();

}

function init(){
    console.log("init");
    updateTaskNum();
    updateItemNum(); 
}
window.onload=init;