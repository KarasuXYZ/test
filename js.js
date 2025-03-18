const form = document.getElementById("form");
const imie = document.getElementById("imie");
const nazwisko = document.getElementById("nazwisko");
const form2 = document.getElementById("form2");

console.log(imie, nazwisko);

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("Imię:", imie.value);
    console.log("Nazwisko:", nazwisko.value);
});

form2.addEventListener("submit", function(event) {
    event.preventDefault(); 
    if(imie.value === "Sebastian" && nazwisko.value === "Kramarz") {
        window.location.href = "Sebastian.html"; 
    }
    else if(imie.value === "Anna" && nazwisko.value === "Kowalska") {
        window.location.href = "Anna.html"; 
    }
    else if(imie.value === "test" && nazwisko.value === "test") {
        window.open("test.html")  ; 
    }
    else if(imie.value === "Nudeski" && nazwisko.value === "Nudeski") {
        window.location.href = "PragneCie.html"; 
    }else if(imie.value === "Windows" && nazwisko.value === "Windows") {
        window.location.href = "https://www.windows93.net"; 
    }
    else {
        alert("Sebuś nie ma dla ciebie wiadomości");
    }
});

function muzyka(prop) {
    if(prop==1)
     window.location.href = "https://youtu.be/3ah4t1P9yFA?si=jcF_Tu3aYVc3j1Xw";
    else if(prop==2)
        window.location.href = "index.html";
    else if(prop==3)
        window.location.href = 'Nudeski.html';
    else if(prop==4)
        window.location.href = "https://youtu.be/gtdjggvaqsg?si=Kg2bK8q82OfH0EmR"

    
    
}

