function checkInput(localStorage, param) {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(param)) {
            const fail = document.createElement("div")
            fail.innerHTML = "Maaf, nama anda sudah terdaftar"
            fail.setAttribute('id', 'failed')
            document.body.appendChild(fail)
            return true
        } else {
            return false
        }
    }
}

let submitBtnEl = document.getElementById("submit-button")

submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault()
    let birthDate = document.getElementById('tanggalLahir').value
    let name = document.getElementById('fname').value
    if (!name) {
        let nameError = document.getElementById("nameFailed")
        nameError.classList.add("active")
        return
    } else if (!birthDate) {
        let dateError = document.getElementById("dateFailed")
        dateError.classList.add("active")
        return
    }

    let flag = checkInput(localStorage, name)

    if (flag === true) {
        const oke = document.createElement("button")
        oke.innerHTML = "OK"
        oke.setAttribute('id', 'okayButton')
        document.body.appendChild(oke)

        document.getElementById("okayButton").addEventListener("click", function () {
            let x = document.getElementById("failed")
            let y = document.getElementById("okayButton")
            x.remove()
            y.remove()
        })
    } else {
        localStorage.setItem(name, birthDate)
        document.location.href = "index2.html"
    }
})
