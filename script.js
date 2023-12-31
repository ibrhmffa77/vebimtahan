// 60.	İki ədədin hasilini hesablayan və paraqraf teqi daxilində qiymətini göstərən funksiya yazın.

// function hasilHesabla(eded1, eded2) {
//             var hasil = eded1 * eded2;
//             var pElement = document.createElement("p");
//             var hasilText = document.createTextNode("hasil: " + hasil);
            
//             pElement.appendChild(hasilText);
//             document.body.appendChild(pElement);
//         }

//         // Funksiyani test etmək üçün örnək ədədlər
//         var eded1 = 5;
//         var eded2 = 7;
//         hasilHesabla(eded1, eded2);





// 61.	Üç ədədin hasilini hesablayan və h1 teqi daxilində qiymətini göstərən funksiya yazın.

// function hasilHesabla(eded1, eded2, eded3) {
//             var hasil = eded1 * eded2 * eded3;
//             var h1Element = document.createElement("h1");
//             var hasilText = document.createTextNode(" hasil: " + hasil);
            
//             h1Element.appendChild(hasilText);
//             document.body.appendChild(h1Element);
//         }

//         // Funksiyani test etmək üçün örnək ədədlər
//         var eded1 = 2;
//         var eded2 = 3;
//         var eded3 = 4;
//         hasilHesabla(eded1, eded2, eded3);






// 62.	İki ədədin hasilini hesablayan və konsolda qiymətini göstərən funksiya yazın.

// function hasilHesabla(eded1, eded2) {
//     var hasil = eded1 * eded2;
//     console.log(" " + hasil);
// }

// // Funksiyani test etmək üçün örnək ədədlər
// var eded1 = 5;
// var eded2 = 7;
// hasilHesabla(eded1, eded2);




// 63.	Üç ədədin hasilini hesablayan və h4 teqi daxilində qiymətini göstərən funksiya yazın

// function hasilHesabla(eded1, eded2, eded3) {
//     var hasil = eded1 * eded2 * eded3;
//     var h4Element = document.createElement("h4");
//     var hasilText = document.createTextNode(" " + hasil);
    
//     h4Element.appendChild(hasilText);
//     document.body.appendChild(h4Element);
// }

// // Funksiyani test etmək üçün örnək ədədlər
// var eded1 = 3;
// var eded2 = 4;
// var eded3 = 5;
// hasilHesabla(eded1, eded2, eded3);




// 64.	İki ədəddən böyük olanı tapan və paraqraf teqi daxilində qiymətini göstərən funksiya yazın.

// function tapBöyükEded(eded1, eded2) {
//     var boyukEded = (eded1 > eded2) ? eded1 : eded2;
//     var pElement = document.createElement("p");
//     var boyukEdedText = document.createTextNode(" en boyuk eded: " + boyukEded);
    
//     pElement.appendChild(boyukEdedText);
//     document.body.appendChild(pElement);
// }

// // Funksiyani test etmək üçün örnək ədədlər
// var eded1 = 8;
// var eded2 = 11;
// tapBöyükEded(eded1, eded2);




// 65.	İki ədəddən kiçik olanı tapan və nəticəni alert() ilə ekrana çıxaran funksiya yazın. 

// function tapKiçikEded(eded1, eded2) {
//             var kicikEded = (eded1 < eded2) ? eded1 : eded2;
//             alert(" kiçik olan ədəd: " + kicikEded);
//         }

//         // Funksiyani test etmək üçün örnək ədədlər
//         var eded1 = 8;
//         var eded2 = 5;
//         tapKiçikEded(eded1, eded2);




// 66.	Ədədin kubunu hesablayan və paraqraf teqi daxilində qiymətini göstərən funksiya yazın.

// function kubHesabla(eded) {
//             var kub = eded * eded * eded;
//             var pElement = document.createElement("p");
//             var kubText = document.createTextNode(eded + " ədədinin kubu: " + kub);
            
//             pElement.appendChild(kubText);
//             document.body.appendChild(pElement);
//         }

//         // Funksiyani test etmək üçün örnək ədəd
//         var eded = 4;
//         kubHesabla(eded);




// 67.	x və y ədədlərini müqayisə edib aldığınız nəticəni (“x böyükdür”, “y böyükdür”, “bərabərdir”) alert() ilə ekrana çıxaran funksiya yazın.

// function ededMuqayise(x, y) {
//             if (x > y) {
//                 alert("x böyükdür");
//             } else if (y > x) {
//                 alert("y böyükdür");
//             } else {
//                 alert("bərabərdir");
//             }
//         }

//         // Funksiyani test etmək üçün örnək ədədlər
//         var x = 9;
//         var y = 8;
//         ededMuqayise(x, y);





// 68.	İki sətri birləşdirib alert() ilə ekrana çıxaran funksiya yazın.

// function sətrləriBirləşdir(sətr1, sətr2) {
//             var birləsdirilmişSətrlər = sətr1 + " " + sətr2;
//             alert(birləsdirilmişSətrlər);
//         }

//         // Funksiyani test etmək üçün örnək sətrlər
//         var sətr1 = "Salam";
//         var sətr2 = "Dünya";
//         sətrləriBirləşdir(sətr1, sətr2);





// 69.	İki sətri birləşdirib paraqraf teqi daxilində qiymətini göstərən funksiya yazın.

// function sətrləriBirləşdirVəGöstər(sətr1, sətr2) {
//             var birləsdirilmişSətrlər = sətr1 + " " + sətr2;
//             var pElement = document.createElement("p");
//             var sətrText = document.createTextNode(" " + birləsdirilmişSətrlər);
            
//             pElement.appendChild(sətrText);
//             document.body.appendChild(pElement);
//         }

//         // Funksiyani test etmək üçün örnək sətrlər
//         var sətr1 = "Salam";
//         var sətr2 = "Dünya";
//         sətrləriBirləşdirVəGöstər(sətr1, sətr2);





// 70.	x ədədinin “mənfi”, “müsbət” və ya “0” olduğunu alert() ilə ekrana çıxaran funksiya yazın.

// function ədədTipiniGöstər(x) {
//             if (x > 0) {
//                 alert(x + " ədədi müsbətdir");
//             } else if (x < 0) {
//                 alert(x + " ədədi mənfidir");
//             } else {
//                 alert("Ədəd 0-dır");
//             }
//         }

//         // Funksiyani test etmək üçün örnək ədədlər
//         var x = -10;
//         ədədTipiniGöstər(x);





// 71.	x ədədinin “cüt”, “tək” olduğunu alert() ilə ekrana çıxaran funksiya yazın.

// function cutTekGoster(x) {
//             if (x % 2 === 0) {
//                 alert(x + " ədədi cütdür");
//             } else {
//                 alert(x + " ədədi təkdir");
//             }
//         }

//         // Funksiyani test etmək üçün örnək ədədlər
//         var x = 7;
//         cutTekGoster(x);

