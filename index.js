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


let bambang = { birthDate: '2021-01-07', tempat: { lokasi: 'SDN 05 KALISARI', kelurahan: 'kalisari', waktu: 'February 5, 2022 07:00:000' } }
let suparman = { birthDate: '2021-01-07', tempat: { lokasi: 'SDN Gedong 12 Pagi', kelurahan: 'gedong', waktu: 'March 3, 2022 07:00:000' } }

localStorage.setItem('Bambang', JSON.stringify(bambang))
localStorage.setItem('Suparman', JSON.stringify(suparman))

let submitBtnEl = document.getElementById("submit-button")
let closePopUpEl = document.getElementById('popUpBtn')
let popUpContainerEl = document.getElementById('popupContainer')
let intervalCountDown;
let vaksinTimeGlobal;

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

    if (localStorage[name]) {
        let objUser = JSON.parse(localStorage[name]);
        renderPopUp(name, objUser)
    } else {
        localStorage.setItem(name, JSON.stringify({ birthDate }))
        localStorage.setItem('userName', name)
        localStorage.setItem('birthDate', birthDate)
        document.location.href = "index2.html"
    }

})

function renderPopUp(name, objUser) {

    const arrInputUser = document.querySelectorAll('.input-popup');
    arrInputUser[0].innerText = name;
    const lokasi = objUser.tempat.lokasi;
    const kelurahan = objUser.tempat.kelurahan;
    const tanggal = objUser.tempat.waktu
    vaksinTimeGlobal = new Date(tanggal)
    arrInputUser[1].innerText = `${lokasi}, Kec. Pasar Rebo, Kel. ${kelurahan[0].toUpperCase() + kelurahan.slice(1)}`;
    arrInputUser[2].innerText = `${new Date(tanggal).toLocaleDateString()}`
    updateCountdown(new Date(tanggal));

    popUpContainerEl.classList.add('active')
}



const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


// Update countdown time
function updateCountdown(vaksinTime = vaksinTimeGlobal) {
    const currentTime = new Date();
    const diff = vaksinTime - currentTime; // vaksinTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    intervalCountDown = setInterval(updateCountdown, 1000)
}




if (closePopUpEl) {
    closePopUpEl.addEventListener('click', () => {
        popUpContainerEl.classList.remove('active')
        clearInterval(intervalCountDown)
    })
}


window.addEventListener('load', () => {
    clearInterval(intervalCountDown)
})

