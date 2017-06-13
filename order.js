function order(arr){
    if(!arr || arr.length == 0) return 'empty Array';
    if(!arr[0].hasOwnProperty('age')) return 'missing age value';
    
    return arr.sort(function(obja, objb){return obja.age - objb.age});
}