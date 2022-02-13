const products = [
    {name: 'laptop', price: 600},
    {name: 'pc', price: 700},
    {name: 'boll', price: 2000},
    {name: 'c-c', price: 900},
    {name: 'top', price: 800}
];
/* let newproducts = [0];
for ( const pro of products){
    if ( pro.price < newproducts.price){
        newproducts = pro ;
    }
}
console.log(newproducts);
 */

let totalprice = 0;
for (const product of products){
    totalprice = totalprice + product.price;
}
console.log(totalprice);