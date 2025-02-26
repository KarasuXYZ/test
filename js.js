const form = document.getElementById("form");
const imie = document.getElementById("imie");
const nazwisko = document.getElementById("nazwisko");
const form2 = document.getElementById("form2");

console.log(imie, nazwisko);

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    console.log("Imię:", imie.value);
    console.log("Nazwisko:", nazwisko.value);
});

form2.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    if(imie.value === "Sebastian" && nazwisko.value === "Kramarz") {
        window.location.href = "Sebastian.html"; // Change to desired URL
    }
    else if(imie.value === "Anna" && nazwisko.value === "Kowalska") {
        window.location.href = "Anna.html"; // Change to desired URL
    }
    else {
        alert("Sebuś nie ma dla ciebie wiadomości");
    }
});



