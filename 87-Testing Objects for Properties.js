
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
 
  
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");

