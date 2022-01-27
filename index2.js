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

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        let namaJalanElement = document.getElementById(item.id).innerHTML
        let idKelurahan = document.getElementById(item.id).parentNode.parentElement.id
        let kelurahan = document.getElementById(idKelurahan).parentElement.getElementsByClassName("dropdown-item")[0].innerHTML
        document.getElementById("namaJalan").innerHTML = `${namaJalanElement}, ${kelurahan}`
    })
})

