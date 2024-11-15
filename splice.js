let Arr=[1, 2, 7, 8, 12, 45, 11, 52, 78, 36];


let startIndexEle=document.getElementById("startIndex");
let deleteCountEle=document.getElementById("deleteCount");
let itemToAddEle=document.getElementById("itemToAdd");

let updatedArrayEle=document.getElementById("updatedArray");
let spliceBtnEle=document.getElementById("spliceBtn");



function convertListArrayToStringify(){
    let stringifyArray=JSON.stringify(Arr);
    updatedArrayEle.textContent=stringifyArray;

};
convertListArrayToStringify();

spliceBtnEle.onclick = function(){
    let startValue=(startIndexEle.value);
    let deleteValue=(deleteCountEle.value);
    let addValue=(itemToAddEle.value);

    if (startValue === ""){
        alert("Enter The StartIndex");
        return;
    };
    if (deleteCountEle === ""){
        deleteValue = 0;

    };

    if  (itemToAddEle === ""){
        Arr.splice(startValue, deleteValue);
    }
    else{
        Arr.splice(startValue, deleteValue, addValue);
    }

    convertListArrayToStringify()
}

