/*
- SDN Gedong 12 Pagi
- RS Pasar Rebo
- KPAD Cijantung
- Gor Bulutangkis Garuda
 */

const tempatVaksin = {
    kalisari: {
        lokasi:
            [
                'SDN 05 KALISARI',
                'GOR KALISARI',
                'GOR CIRACAS',
                'PUSKESMAS KALISARI',
                'SMPN 179 KALISARI '
            ],
            waktu: 'February 5, 2022 07:00:000'
    },
    pekayon: {
        lokasi:
            [
                'SMPN 184 PEKAYON',
                'PUSKESMAS PEKAYON',
                'SMAN 106 JAKARTA',
                'SDN PEKAYON 09 PAGI'
            ],
            waktu: 'February 10, 2022 07:00:000'
    },
    cijantung: {
        lokasi:
            [
                'RS KESDAM JAYA CIJANTUNG',
                'SMP NEGRI 251',
                'BAYU YUDHA ARENA',
                'SMP NEGRI 217 JAKARTA',
                'STKIP KUSUMANEGARA'
            ],
            waktu: 'February 7, 2022 07:00:000'
    },
    'Kampung Baru': {
        lokasi:
            [
                'SMAN 38 Kampung baru',
                'Puskesmas Kelurahan Baru',
                'SMAN 88'
            ],
            waktu: 'March 15, 2022 07:00:000'
    },
    gedong: {
        lokasi:
            [
                'SDN Gedong 12 Pagi',
                'RS Pasar Rebo',
                'KPAD Cijantung',
                'Gor Bulutangkis Garuda'
            ],
            waktu: 'March 3, 2022 07:00:000'
    }
}


let timeStamp = new Date()
let username = {date: '2021-01-07', tempat: { lokasi: 'SDN 05 KALISARI', kelurahan: 'kalisari', waktu: 'February 5, 2022 07:00:000' }, timeStamp }
localStorage.setItem('Bambang', JSON.stringify(username))
let local = {...localStorage}
let waktu = JSON.parse(local['Bambang']).timeStamp
console.log(local)

function checkInput(local, param) {


    // for (const key in localStorage) {
    //     if (localStorage.hasOwnProperty(param)) {
    //         const fail = document.createElement("div")
    //         fail.innerHTML = "Maaf, nama anda sudah terdaftar"
    //         fail.setAttribute('id', 'failed')
    //         document.body.appendChild(fail)
    //         return true
    //     } else {
    //         return false
    //     }
    // }
}

let submitBtnEl = document.getElementById("submit-button")
let closePopUpEl = document.getElementById('popUpBtn')
let popUpContainerEl = document.getElementById('popupContainer')

submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault()
    let birthDate = document.getElementById('tanggalLahir').value
    let name = document.getElementById('fname').value
    let formError = document.querySelectorAll(".failed-form")
    if (!name) {
        formError[0].classList.add("active")
        return
    } 
    formError[0].classList.remove("active")
    if (!birthDate) {
        formError[1].classList.add("active")
        return
    }
    formError[1].classList.remove("active")

    // let flag = checkInput(local, name)

    if (localStorage[name]) {
        popUpContainerEl.classList.add('active')
    } else {
        localStorage.setItem(name, birthDate)
        document.location.href = "pg2.html"
    }
})

closePopUpEl.addEventListener('click', () => {
    popUpContainerEl.classList.remove('active')
})

function renderPopUp () {

}
