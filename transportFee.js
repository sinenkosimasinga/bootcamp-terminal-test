export default function transportFee(shift){
    if (shift.startsWith("morning")){
      return "R20";
    }else if (shift.startsWith("afternoon")){
      return "R10";
    }else{
      return "free";
    }
  }
  console.log(transportFee("morning"))