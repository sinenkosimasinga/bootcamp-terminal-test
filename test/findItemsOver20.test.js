var itemList = [ {name : 'apples', qty : 10},{name : 'pears', qty : 37}, {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];
import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('findItemsOver20', () =>{
    it(" It should return an items with quantity of over 20", () => {
        assert(findItemsOver20(itemList,20));
    })
    it("It should return an items with quantity of over 20", () => {
        assert(findItemsOver20(itemList2,20));
    })
})