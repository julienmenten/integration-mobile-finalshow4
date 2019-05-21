// JavaScript Document
if(localStorage.getItem("LocalData") == null){
    var data = [];
    data = JSON.stringify(data);
    localStorage.setItem("LocalData", data);
}