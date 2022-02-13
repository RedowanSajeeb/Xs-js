
const phons = [
    {name: 'hp-01 ', Color: 'black', six: ' 50pxl' , price:  650},
    {name: 'h-02 ', Color: 'black', six: ' 590pxl' , price: 850},
    {name: 'hp-03 ', Color: 'black', six: ' 590pxl' , price:  550},
    {name: 'hp-04 ', Color: 'black', sx: ' 580pxl' , price: 4450},
    {name: 'hp-05 ', Color: 'black', six: ' 580pxl' , price:  2250},
    {name: 'hp-06 ', Color: 'black', six: ' 570pxl' , price: 15},
    {name: 'hp-07 ', Color: 'black', six: ' 560pxl' , price:  60},
    {name: 'hp-08 ', Color: 'black', six: ' 550pxl' , price: 550},
    {name: 'hp=09 ', Color: 'black', six: ' 540pxl' , price:  750},
    {name: 'h=10 ', Color: 'black', six: ' 540pxl' , price:150},
    {name: 'hp-11 ', Color: 'black', six: ' 40pxl' , price:  350},
    {name: 'hp-12 ', Color: 'black', six: ' 0pxl' , price:  250}
];
let  cheapest = phons [0];
for ( const phone of phons ){
    if ( phone.price < cheapest.price){
    cheapest = phone ;
    }
}
console.log(cheapest);

/* --------------parlam nah/*  */ 