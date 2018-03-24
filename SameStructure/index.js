
Array.prototype.sameStructureAs = function(other){
  var primaryQueue = [this], secondaryQueue = [other] // use simple array for simplicity
  
  while(primaryQueue.length > 0 & secondaryQueue.length > 0){
    let one = primaryQueue.shift(), two = secondaryQueue.shift();
    
    for(let i =0,j=0; i < one.length, j < two.length; i++, j++){
      if(Array.isArray(one[i]) & Array.isArray(two[j])){
        primaryQueue.push(one[i]);
        secondaryQueue.push(two[j])
      } 

      if(Array.isArray(one[i]) !== Array.isArray(two[j])){
        return false
      }       
    }
  }

  return true;
}