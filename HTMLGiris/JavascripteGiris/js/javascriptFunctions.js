function yazdir() {
    document.write("hello ben external dan geliyorum");
}
function lamba() {
    var img = document.getElementById("img");
    if (img.src.match("pic_bulboff")) {
        img.src = "images/pic_bulbon.gif";

    }
    else {
        img.src = "images/pic_bulboff.gif";
    }


}

function BulbOn() {
    document.getElementById("bulb").src = "images/pic_bulbon.gif";
}

function BulbOff() {
    document.getElementById("bulb").src = "images/pic_bulboff.gif";

}

function Sirala() {

    var dizi = new Array();
    var dizii = "";
    var dizidiv = document.getElementById("dizi");
    for (var i = 0; i < 10; i++) {
        dizi[i] = Math.floor((Math.random() * 220) + 1);
        dizidiv.innerHTML += dizi[i]+"<br>";
       
    }
   dizidiv.innerHTML = "-------Sort--------";
    dizi.sort(function (a, b) { return a - b; });

    for (var i = 0; i < dizi.length; i++) {

        dizidiv.innerHTML += dizi[i] + "<br>"
    }


}

function objectTanimlama() {

    var text = new String("damla");
    var number = new Number(55);
    var dizi = new Array();

    var text2 = new String("damla");
    var text3 = "damla";

    if (text == text2) {
        //false
    }

    if(text==text3)
    {
        //true
    }
}

function ara() {
    var cumle = document.getElementById("cumle").value;
    var aranacak = document.getElementById("aranacak").value;
  
    if(cumle.search(aranacak)!=-1){
        alert("bulundu");
    } else {
        alert("bulunamadı");
    }
}   
function Ekle() {
    var eklenecek = document.getElementById("eklenecek").value;
    var ul = document.getElementById("li-ekle");
    ul.style.listStyleType="Square";
    ul.innerHTML += "<li>" + eklenecek + "</li>";
    alert("Eklendi");
}