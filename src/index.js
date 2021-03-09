
exports.min = function min (array) {
  if(array == null || array.length == 0){
    return 0;
  }
  let minimum = Math.min.apply(null, array)
  return minimum;
}

exports.max = function max (array) {
  if(array == null || array.length == 0){
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  
  let sum = 0;
  
    if(array == null || array.length == 0){
      return 0;
    }
    for(let i = 0; i < array.length; i ++){
          sum = sum + array[i]; 
          
      }
     
    let s = sum/array.length;
    return s ;
}
