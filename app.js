alert("Assalomu alaykum 5ta son kiring va bu dastur  sizga o'rtadagi sonni topib beradi ")
let son1 = +prompt("Son kiriting 1-sonni kiriting")
console.log(son1);
let son2 = +prompt("Son kiriting 2-sonni kiriting");
console.log(son2);
let son3 = +prompt("Son kiriting 3-sonni kiriting");
console.log(son3);
let son4 = +prompt("Son kiriting 4-sonni kiriting");
console.log(son4);
let son5 = +prompt("Son kiriting 5-sonni kiriting");
console.log(son5);
// let son1 = 1
// let son2 = 3
// let son3 = 2
// let son4 = 4
// let son5 = 4
//son1 uchun
let son12 = son1 - son2 ;
let son13 = son1 - son3 ;
let son14 = son1 - son4 ;
let son15 = son1 - son5 ;
//son2 uchun
let son21 = son2 - son1 ;
let son23 = son2 - son3 ;
let son24 = son2 - son4 ;
let son25 = son2 - son5 ;
//son3 uchun
let son31 = son3 - son1 ;
let son32 = son3 - son2 ;
let son34 = son3 - son4 ;
let son35 = son3 - son5 ;
//son4 uchun
let son41 = son4 - son1 ;
let son42 = son4 - son2 ;
let son43 = son4 - son3 ;
let son45 = son4 - son5 ;
//son5 uchun
let son51 = son5 - son1 ;
let son52 = son5 - son2 ;
let son53 = son5 - son3 ;
let son54 = son5 - son4 ;
//end
if (son1===son2 && son2===son3 && son3 ===son4 && son1===son5  ) {
    alert(son1)
}
else if (son12 > 0 && son13 > 0 || son13 > 0 && son14 > 0 ||son14 > 0 && son15 > 0 || son12 > 0 && son14 > 0 ||son12 > 0 && son15 > 0 || son13 > 0 && son15 > 0 ) {
    alert("Ortadagi son :" + son1)
}
else if (son21 > 0 && son23 > 0 || son23 > 0 && son24 > 0 ||son24 > 0 && son25 > 0 || son21 > 0 && son24 > 0 ||son21 > 0 && son25 > 0 || son23 > 0 && son25 > 0 ) {
    alert("Ortadagi son :" + son2);
}
else if(son31 > 0 && son32 > 0 || son32 > 0 && son34 > 0 ||son34 > 0 && son35 > 0 || son31 > 0 && son34 > 0 ||son31 > 0 && son35 > 0 || son32 > 0 && son35 > 0 ) {
    alert("Ortadagi son :" + son3);
}
else if(son41 > 0 && son42 > 0 || son42 > 0 && son43 > 0 ||son43 > 0 && son45 > 0 || son41 > 0 && son43 > 0 ||son41 > 0 && son45 > 0 || son42 > 0 && son45 > 0 ) {
    alert("Ortadagi son :" + son4);
}
else if(son51 > 0 && son52 > 0 || son52 > 0 && son53 > 0 ||son53 > 0 && son54 > 0 || son51 > 0 && son53 > 0 ||son51 > 0 && son54 > 0 || son52 > 0 && son54 > 0 ) {
    alert("Ortadagi son :" + son5); }
else{
    "Iltimos faqat son kiriting!!!"
}