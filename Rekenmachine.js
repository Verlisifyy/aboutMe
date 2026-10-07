document.getElementById("berekenBtn").addEventListener("click", function() {

    let a = Number(document.getElementById("getal1").value);
    let b = Number(document.getElementById("getal2").value);

    let som = a + b;

    document.getElementById("resultaat").textContent = "Som: " + som;

    if (som > 100) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

});