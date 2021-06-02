

const app2= new Vue({
    el: '#app',
    name: 'uzaktan Kurs',

data:{
        <!--EKRANDA KULLANDIGIMIZ İÇİN BOŞ TANIMLAMA YAPILMALI - -->
    aktifKullanici: {},
    kullanicilar : [
        {
            id: 15,
            isim: 'merve',
            rol: 'Admin'
        },
        {
            id: 25,
            isim: 'nur',
            rol: 'Admin'
        },
        {
            id: 3,
            isim: 'müne',
            rol: 'User'
        }]
},
    methods: {
        //modal içerisinde butona tıklayınca çalışacak metot
        kullaniciYeni(){

            //yeni bir kullanıcıyı data içerisindeki 'aktifkullanici' şeklinde bi değişken
            //içerisinde tutmak istiyorum.
            //varsayılan başlangıç degerini boş bi obje olarak oluşturuyorum.

            this.aktifKullanici={};
            //bi pencere açtırmam gerekiyor. model penceresi açılması lazım
            //jquery ile beraber kullanıcı modelin modal olarak gösterilmesini sağlayan , komut yazıldı
            //modal.show deyince  modal gösterilir
            $('#kullaniciModal').modal('show');
//kullaniciKaydet metodu modal içinde old. için burda kullanılır

        },
        //modal içinde kullanılmıştı
        kullaniciKaydet() {
        }
    }
})