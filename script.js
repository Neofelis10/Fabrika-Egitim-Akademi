
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

function redirectToPage() {
    window.location.href = "hakkimizda.html";
}

function changeSeventhClass(imageSrc) {
    document.getElementById('box-1-img').src = imageSrc;

    var newContent = [
        "Yılda 432 Saat Ders (5 Kişi)",
        "Öğrencinin Eksiklerine Göre 30 Ders Birebir - Özel Ders",
        "15 Deneme Sınavı - 15 Konu Tarama Sınavı",
        "Türkiye Geneli Sınavlara Katılım",
        "Haftalık Ödevlenirme - Eksik Takibi",
        "En İyi Koçluk ve Rehberlik Hizmeti",
        "Soru Çözüm Saatleri",
        "Yılda 4 Kez Kamp Programı"
    ];

    var newInnerHTML = "";
    newContent.forEach(function (content) {
        newInnerHTML += '<li class="list-item"><i class="bi bi-pencil-fill"></i><span>' + content + '</span></li>';
    });

    document.getElementById('box-2-list').innerHTML = newInnerHTML;
}

function changeEighthClass(imageSrc) {
    document.getElementById('box-1-img').src = imageSrc;

    var newContent = [
        "Yılda 576 Saat Ders (10 Kişi)",
        "Öğrencinin Eksiklerine Göre 30 Ders Birebir - Özel Ders",
        "60 Deneme Sınavı - 50 Konu Tarama Sınavı",
        "Türkiye Geneli Sınavlara Katılım",
        "Haftalık Ödevlenirme - Eksik Takibi",
        "En İyi Koçluk ve Rehberlik Hizmeti",
        "Soru Çözüm Saatleri",
        "Yılda 4 Kez Kamp Programı"
    ];

    var newInnerHTML = "";
    newContent.forEach(function (content) {
        newInnerHTML += '<li class="list-item"><i class="bi bi-pencil-fill"></i><span>' + content + '</span></li>';
    });

    document.getElementById('box-2-list').innerHTML = newInnerHTML;
}

function changeTenthClass(imageSrc) {
    document.getElementById('box-1-img').src = imageSrc;

    var newContent = [
        "Yılda 432 Saat Ders (5 Kişi)",
        "Öğrencinin Eksiklerine Göre 30 Ders Birebir - Özel Ders",
        "15 Deneme Sınavı - 15 Konu Tarama Sınavı",
        "Türkiye Geneli Sınavlara Katılım",
        "Haftalık Ödevlenirme - Eksik Takibi",
        "En İyi Koçluk ve Rehberlik Hizmeti",
        "Soru Çözüm Saatleri",
        "Yılda 4 Kez Kamp Programı"
    ];

    var newInnerHTML = "";
    newContent.forEach(function (content) {
        newInnerHTML += '<li class="list-item"><i class="bi bi-pencil-fill"></i><span>' + content + '</span></li>';
    });

    document.getElementById('box-2-list').innerHTML = newInnerHTML;
}

function changeEleventhClass(imageSrc) {
    document.getElementById('box-1-img').src = imageSrc;

    var newContent = [
        "Yılda 504 Saat Ders (10 Kişi)",
        "Öğrencinin Eksiklerine Göre 30 Ders Birebir - Özel Ders",
        "15 Deneme Sınavı - 20 Konu Tarama Sınavı",
        "Türkiye Geneli Sınavlara Katılım",
        "Haftalık Ödevlenirme - Eksik Takibi",
        "En İyi Koçluk ve Rehberlik Hizmeti",
        "Soru Çözüm Saatleri",
        "Yılda 4 Kez Kamp Programı"
    ];

    var newInnerHTML = "";
    newContent.forEach(function (content) {
        newInnerHTML += '<li class="list-item"><i class="bi bi-pencil-fill"></i><span>' + content + '</span></li>';
    });

    document.getElementById('box-2-list').innerHTML = newInnerHTML;
}

function changeTwelfthClass(imageSrc) {
    document.getElementById('box-1-img').src = imageSrc;

    var newContent = [
        "Yılda 648 Saat Ders (10 Kişi)",
        "Öğrencinin Eksiklerine Göre 30 Ders Birebir - Özel Ders",
        "90 Deneme Sınavı - 50 Konu Tarama Sınavı",
        "Türkiye Geneli Sınavlara Katılım",
        "Haftalık Ödevlenirme - Eksik Takibi",
        "En İyi Koçluk ve Rehberlik Hizmeti",
        "Soru Çözüm Saatleri",
        "Yılda 4 Kez Kamp Programı"
    ];

    var newInnerHTML = "";
    newContent.forEach(function (content) {
        newInnerHTML += '<li class="list-item"><i class="bi bi-pencil-fill"></i><span>' + content + '</span></li>';
    });

    document.getElementById('box-2-list').innerHTML = newInnerHTML;
}

function changeGraduateClass(imageSrc) {
    document.getElementById('box-1-img').src = imageSrc;

    var newContent = [
        "Yılda 720 Saat Ders (10 Kişi)",
        "Öğrencinin Eksiklerine Göre 30 Ders Birebir - Özel Ders",
        "90 Deneme Sınavı - 50 Konu Tarama Sınavı",
        "Türkiye Geneli Sınavlara Katılım",
        "Haftalık Ödevlenirme - Eksik Takibi",
        "En İyi Koçluk ve Rehberlik Hizmeti",
        "Soru Çözüm Saatleri",
        "Yılda 4 Kez Kamp Programı"
    ];

    var newInnerHTML = "";
    newContent.forEach(function (content) {
        newInnerHTML += '<li class="list-item"><i class="bi bi-pencil-fill"></i><span>' + content + '</span></li>';
    });

    document.getElementById('box-2-list').innerHTML = newInnerHTML;
}



