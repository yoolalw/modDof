console.log("a")

const todo = document.getElementById('todo')
const doing = document.getElementById('doing')
const done = document.getElementById('done')
let aa = document.createElement('aa')



console.log(JSON.parse(localStorage.getItem('ativ')))

let arr = JSON.parse(localStorage.getItem('ativ'))
arr.forEach((item) => {
    console.log(item)

    todo.innerHTML += `
        <div id="div" class="bg-[#EDEDED] text-center justify-center mt-2 h-40 w-full rounded-lg w-20 shadow-xl">
            <h1 class="text-[50px] font-bold text-[#333]">${item.atv}</h1>
            <div class="flex justify-center gap-20 mt-7">
                <button id="voltar" class="h-10 w-20 font-bold text-gray-700 bg-blue-300 shadow-lg cursor-pointer rounded-lg hover:bg-blue-200">Voltar</button>
                <button id="avancar" class="h-10  w-20 font-bold text-gray-700 bg-blue-300 shadow-lg cursor-pointer rounded-lg hover:bg-blue-200">Avancar</button>
            </div>   
        </div>
    `

    const avancar = document.getElementById('avancar')
    avancar.addEventListener('click', (e) => {
        e.preventDefault()

        
        

    })

});

