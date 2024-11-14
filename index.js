const methodArray = [
    "monochrome", 
    "monochrome-dark", 
    "monochrome-light", 
    "analogic", 
    "complement", 
    "analogic-complement",
    "triad",
    "quad",
    ]
const formSelectElement = document.getElementById("form-select")
let methodeHtml = ""  

for (let methode of methodArray){
    methodeHtml += `
        <option value="${methode}">
            ${String(methode).charAt(0).toUpperCase() + String(methode).slice(1)}
        </option>
        `       
}    
formSelectElement.innerHTML = methodeHtml

document.getElementById("form-form").addEventListener("submit", function(e) {
    e.preventDefault()
    const formColor = String(document.getElementById("form-color").value).slice(1)
    const formSelect = formSelectElement.value
    const formNumber = document.getElementById("form-number").value
// https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic
    const url = 'https://www.thecolorapi.com/scheme?hex='
                    +formColor+'&mode='
                    +formSelect+'&count='
                    +formNumber
   
    fetch(url)
        .then(res => res.json())
        .then(post => {
            let colorResponse = post.colors
                .map(x => (
                    // `<div style="background-color: ${x.hex.value};color: ${x.contrast.value};">${x.hex.value}</div>`
                    `<div class="color-column">
                        <div class="color-fill" style="background-color: ${x.hex.value};"></div>
                        <div class="color-text">${x.hex.value}</div>
                    </div>`
                    )
                ).join("")
            // console.log(post.colors[0])
            document.getElementById("color-scheme").innerHTML = colorResponse   
        })
    });