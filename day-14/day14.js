function checkL(list){
    return list.match(/\D/g);
}
function listSort(list){
    list = list.split(",");
    list.sort(function(a,b){return b-a;});
    return list;
}