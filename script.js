const mainContainer = document.querySelector("#mainContainer");

var ancho = 16;

var alto = 16;


for (var i = 1; i <= alto; i++){
    var row = document.createElement("div");
    row.id = i;
    row.className = "row";
    row.style.display = "flex";
    for (var j = 1; j <= ancho; j++){
        var square = document.createElement("div");
        square.style.width = "6.25%";
        square.style.border = "1px solid black";
        square.id = i+"-"+j;
        square.className = "square";
        square.style.aspectRatio = "1/1";
        square.addEventListener("mouseover",function(){
            this.style.backgroundColor = "black";
        })
        row.appendChild(square);
        
    }
    mainContainer.appendChild(row);
}

function cambioTamano(){

    ancho = parseInt(prompt("Introduce el ancho en cuadrados"));
    alto = parseInt(prompt("Introduce el alto en cuadrados"));
    mainContainer.textContent = "";
    for (var i = 1; i <= alto; i++){
        var row = document.createElement("div");
        row.id = i;
        row.className = "row";
        row.style.display = "flex";
        for (var j = 1; j <= ancho; j++){
            var square = document.createElement("div");
            square.style.width = "6.25%";
            square.style.border = "1px solid black";
            square.id = i+"-"+j;
            square.className = "square";
            square.style.aspectRatio = "1/1";
            square.addEventListener("mouseover",function(){
                this.style.backgroundColor = "black";
            })
            row.appendChild(square);
            
        }
        mainContainer.appendChild(row);
    }

}