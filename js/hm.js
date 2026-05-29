console.log("a")

let arr = JSON.parse(localStorage.getItem('ativ'))

const rel = document.getElementById('rel')

rel.addEventListener('click', (e) => {
    e.preventDefault()
    arr.forEach((atv) => {
        console.log(atv)

        let av = document.createElement('a')
        const blob = new Blob([arr], { type: "text/html" })
        var url = URL.createObjectURL(blob)

        av.click(
        )


        

    });
})

