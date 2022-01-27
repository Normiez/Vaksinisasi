/*
- SDN Gedong 12 Pagi
- RS Pasar Rebo
- KPAD Cijantung
- Gor Bulutangkis Garuda
 */

const tempatVaksin = {
    kalisari: {
        'SDN 05 KALISARI': 10,
        'GOR KALISARI': 2,
        'GOR CIRACAS': 1,
        'PUSKESMAS KALISARI': 5,
        'SMPN 179 KALISARI ': 3
    },
    pekayon: {
        'SMPN 184 PEKAYON': 1,
        'PUSKESMAS PEKAYON': 2,
        'SMAN 106 JAKARTA': 3,
        'SDN PEKAYON 09 PAGI': 5,
    },
    cijantung: {
        'RS KESDAM JAYA CIJANTUNG': 3,
        'SMP NEGRI 251': 4,
        'BAYU YUDHA ARENA': 7,
        'SMP NEGRI 217 JAKARTA': 2,
        'STKIP KUSUMANEGARA': 1,
    },
    'Kampung Baru': {
        'SMAN 38 Kampung baru': 3,
        'Puskesmas Kelurahan Baru': 4,
        'SMAN 88': 7,
    },
    gedong: {
        'SDN Gedong 12 Pagi': 1,
        'RS Pasar Rebo': 3,
        'KPAD Cijantung': 6,
        'Gor Bulutangkis Garuda': 2
    }
}

let userData = []

let submitBtnEl = document.getElementById("submit-button")

submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault()
    let birthDate = document.getElementById('tanggalLahir').value
    let name = document.getElementById('fname').value
    let obj = {
        nama: name,
        tanggalLahir: birthDate
    }
    userData.push(obj)
    console.log(userData, "<<<<<<<<<")
    
})