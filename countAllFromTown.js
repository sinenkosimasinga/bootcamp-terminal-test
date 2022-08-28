export default function countAllFromTown(regNumbers,Location){
    let count =0;
      var allPaarl = regNumbers.split(",");
      for (var i =0; i< allPaarl.length; i++){
       var regPaarl =allPaarl[i].trim();
        if (regPaarl.startsWith(Location)) {
        count++
        }
      }return count
    }
    console.log(countAllFromTown( 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))