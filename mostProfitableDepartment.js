export default function mostProfitableDepartment(profitableDep) {
    let salesMap = {};
    for (var i=0; i<profitableDep.length; i++) {
      var salesData = profitableDep[i];
      salesMap[salesData.department] = 0;
    }
    //console.log(salesMap);
    for (var i=0; i<profitableDep.length; i++) {
      var salesData = profitableDep[i];
      var currentDepTotal = salesMap[salesData.department];
      currentDepTotal += salesData.sales
      salesMap[salesData.department] = currentDepTotal;
    }
    //console.log(salesMap);
    var highestSales = 0
    var departmentCategory = "";
    for(let sales in salesMap) {
        var itemsSold = salesMap[sales];
      if(itemsSold > highestSales) {
        highestSales = itemsSold;
        departmentCategory = sales;
         //console.log(departmentCategory);
      }
    }
    console.log(departmentCategory);
    return departmentCategory
   
  }