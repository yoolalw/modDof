console.log("a")

const msg = document.getElementById("msg")
const button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    const input = document.getElementById("input").value

    if (input.value == "") {
        console.log("b")
        msg.textContent = "O campo precisa estar preenchido."
        
    } else {
        console.log("c")
        msg.textContent = ""

        const item = [{ 
            atv: JSON.stringify(input),
            status: "todo"
        }]
        const ativ = JSON.parse(localStorage.getItem('ativ')) || []
        ativ.push(item.atv, item.status)
        localStorage.setItem('ativ', JSON.stringify(item))
    }
})

console.log(localStorage.getItem('ativ'))