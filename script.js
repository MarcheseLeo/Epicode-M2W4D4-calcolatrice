const buttonList = document.querySelectorAll(`input[type="button"]`)
let p = document.getElementById('output')
let previous = document.getElementById('previous')
let opeazione = ""
const spec = "+-*/"
const spec2 = "+*/"
console.log(buttonList)

for (let button of buttonList) {
    button.addEventListener('click', () => {
        // console.log(button.value)
        // if (button.value === "C") {
        //     p.textContent = "0"
        // } else if (button.value === "=") {
        //     p.textContent = eval(p.textContent)
        // } else if (p.textContent ==="0"&&spec2.includes(button.value)){


        // } else {
        //     if(p.textContent==="0")p.textContent=""
        //     else if((p.textContent.endsWith('*')||p.textContent.endsWith('-')||p.textContent.endsWith('+') || p.textContent.endsWith('/'))&& spec.includes(button.value)){
        //         // p.textContent = p.textContent.charAt(p.lenght-1).replace("*", button.value)
        //         p.textContent.charAt(p.lenght-1) = button.value
        //         console.log(p.textContent)
        //     }else{

        //     }
        //     p.textContent += button.value
        // }

        immissione(button.value)
    })
}

function immissione(dato) {
    let curValue = p.value
 
    switch (dato) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (curValue !== "") {
                if (curValue.endsWith("+") || curValue.endsWith("-") || curValue.endsWith("*") || curValue.endsWith("/")) {
                    if (curValue == "-") {
                        console.log('ciao')
                    } else {
                        let modVlue = curValue.slice(0, -1)
                        p.value = modVlue + dato
                    }
                } else {
                    p.value += dato
                }
            } else if (dato == "-") {
                p.value = dato
            }
            break;
        case 'C':
            cancella()
            break;
        case '=':
            calcola()
            break
        default:
            if (p.value == "0") {
                p.value = dato
            } else {
                p.value += dato
            }
    }
}

function cancella() {
    p.value = ""
    previous.value = ""
}

function calcola() {
    previous.value = p.value
    p.value = eval(p.value)
}
