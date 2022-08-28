export default function countAllPaarl(regNumbers,town){
    //var regNumbersForPaarl = [];
    var counter = 0;
    var splitRegNumber = regNumbers.split(",");
    //console.log(splitRegNumber)
    for (var i=0;i<splitRegNumber.length;i++) {
      var newRegNumber = splitRegNumber[i].trim()
      //console.log(newRegNumber)
      if (newRegNumber.startsWith ('CJ')) {
        //console.log(regNumbersForPaarl ("CJ"));
        /*counter++; */counter = counter + 1
  //console.log(splitRegNumber[i].trim());
      console.log(counter)
  //regNumbersForPaarl.push(splitRegNumber[i])
       
  }  
  }
  return counter;
  }