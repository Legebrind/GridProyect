const mainContainer = document.querySelector("#mainContainer");

for (var i = 1; i <= 16; i++){
    var row = document.createElement("div");
    row.id = i;
    row.className = "row";
    row.style.display = "flex";
    for (var j = 1; j <= 16; j++){
        var square = document.createElement("div");
        square.style.width = "6.25%";
        square.style.border = "1px solid black";
        square.id = i+"-"+j;
        square.className = "square";
        square.style.aspectRatio = "1/1";
        row.appendChild(square);
        
    }
    mainContainer.appendChild(row);
}