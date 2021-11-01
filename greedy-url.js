 
function getURL(data) {
  let array = []
  let result = []
  array = data.split(/[ \n]/)
  for(let i=0;i<array.length;i++){
    if(array[i].length >4){
      while(array[i].slice(0,4)!="http" && array[i].length >8){
        array[i] = array[i].substring(1)
      }
      if(isValidHttpUrl(array[i])) {
        result.push(array[i])
      }
    }
  }
  return result
} 


function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
}

function greedyQuery(data){
  let array = getURL(data)
  let result = []
  for(let i=0;i<array.length;i++){
    if((array[i].match(/=/g) || []).length >= 3){
      result.push(array[i])
    }
  }
  return result
}

function notSoGreedy(data){
  let array = getURL(data)
  let result = []
  for(let i=0;i<array.length;i++){
    if((array[i].match(/=/g) || []).length <=3 && (array[i].match(/=/g) || []).length >=2){
      result.push(array[i])
    }
  }
  return result
}




