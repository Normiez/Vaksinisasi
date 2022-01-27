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

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        let namaJalanElement = document.getElementById(item.id).value
        
    })
})

// let sdn05Element = document.getElementById('SDN_05');
// sdn05Element.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `Kalisari - `;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let GOR_KalisariElement = document.getElementById(`GOR_Kalisari`);
// GOR_KalisariElement.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement)
// })

// let GOR_Ciracas = document.getElementById(`GOR_Ciracas`);
// GOR_Ciracas.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini C`;
//     namaJalanElement.appendChild(namaJalannyaElement)
// })

// let Puskesmas_Kalisari = document.getElementById(`Puskesmas_Kalisari`);
// Puskesmas_Kalisari.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement)
// })

// let SMP_179 = document.getElementById(`SMP_179`);
// SMP_179.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement)
// })

// let SMP_184 = document.getElementById(`SMP_184`);
// SMP_184.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let Puskesmas_Pekayon = document.getElementById(`Puskesmas_Pekayon`);
// Puskesmas_Pekayon.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SMAN_106 = document.getElementById(`SMAN_106`);
// SMAN_106.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SDN_Pekayon = document.getElementById(`SDN_Pekayon`);
// SDN_Pekayon.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let RS_Kesdam = document.getElementById(`RS_Kesdam`);
// RS_Kesdam.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SMPN_251 = document.getElementById(`SMPN_251`);
// SMPN_251.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let Bayu_Yudha = document.getElementById(`Bayu_Yudha`);
// Bayu_Yudha.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SMPN_217 = document.getElementById(`SMPN_217`);
// SMPN_217.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let STKIP_Kusumanegara = document.getElementById(`STKIP_Kusumanegara`);
// STKIP_Kusumanegara.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SMAN_08 = document.getElementById('SMAN_08');
// SMAN_08.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let Puskesmas_Kelurahan = document.getElementById('Puskesmas_Kelurahan');
// Puskesmas_Kelurahan.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SMAN_88 = document.getElementById(`SMAN_88`);
// SMAN_88.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let SDN_Gedong = document.getElementById(`SDN_Gedong`);
// SDN_Gedong.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let RS_Pasar = document.getElementById(`RS_Pasar`);
// RS_Pasar.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let KPAD_Cijantung = document.getElementById(`KPAD_Cijantung`);
// KPAD_Cijantung.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })

// let GOR_Bulutangkis = document.getElementById(`GOR_Bulutangkis`);
// GOR_Bulutangkis.addEventListener(`click`, function () {
//     let namaJalanElement = document.getElementById(`nama_jalan`);
//     let namaJalannyaElement = document.createElement('li');
//     namaJalannyaElement.innerHTML = `jalannya disini B`;
//     namaJalanElement.appendChild(namaJalannyaElement);
// })