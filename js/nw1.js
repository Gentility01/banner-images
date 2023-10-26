// function product(product, price, qty){
//     getTotal = price * qty
//     console.log(` product: ${product} \n price: ${price}  quantity : ${qty} total:${getTotal} `)


// }

// product("laptop", 300000, 5)

class Products{

    laptop (price, qty){
    let getTotal = price * qty
    console.log(` price: ${price}  quantity : ${qty} total:${getTotal} `)


    }

    phone (price, qty){
    let getTotal2 = price * qty
    console.log(` price: ${price}  quantity : ${qty} total:${getTotal2} `)


    }

}

const productItems = new Products()


let purchaseItem = parseInt(prompt("What do you want to purchase \n 1. Laptop \n 2. phone"))

if(purchaseItem == 1){
    let choooseQty = parseInt(prompt("How many pieaces of laptop do you want")) 
    getLaptop = productItems.laptop(300000, choooseQty)
}else if (purchaseItem == 2){
    let choooseQty = parseInt(prompt("How many pieaces of phone do you want")) 
    getphone = productItems.phone(30000, choooseQty)
}