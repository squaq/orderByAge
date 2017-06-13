function order(arr){
    if(!arr) return 'empty Array';
    if(typeof(arr[0].age) == 'undefined') return 'missing age value';
    
    return arr.sort(function(obja, objb){return obja.age - objb.age});
}