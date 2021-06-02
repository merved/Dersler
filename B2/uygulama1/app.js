

const app= new Vue({
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
            /*2.ADIM İLK AÇILDIGI ANDA ROL KISMINDA TEXT ALANINI DEGAULT OLARAK SEÇİNİZ GELMESİ İÇİN
            ROL DEGERİNİN SEÇİNİZ OALRAK GELMESİ this.aktifKullanici={ rol: ''}; böyle boş olarak tanımlanır
            NEDENİ sayfa içierisinde              <option value="">Seçiniz</option>
            value="" boş olarak tanımlanmış
            */

            //yeni bir kullanıcıyı data içerisindeki 'aktifkullanici' şeklinde bi değişken
            //içerisinde tutmak istiyorum.
            //varsayılan başlangıç degerini boş bi obje olarak oluşturuyorum.

            this.aktifKullanici={ rol: ''};

            $('#kullaniciModal').modal('show');
//kullaniciKaydet metodu modal içinde old. için burda kullanılır

        },
        //modal içinde kullanılmıştı
        kullaniciKaydet() {
            //kullanıcı kaydetme
            /*dizi elemanına obje ekleme this.kullanicilar.push({  })
            //id için => kullanıcilar tablosundaki uzunlugun 1 fazlası olarak id verilebilir
                id: this.kullanicilar.length + 1

            * */
            /*formu açtıgımız anda modal içerisindeki nesene adı == aktifkullanici bunu içerisindeki
            degerleri alıyoruz
            * */
            if(this.aktifKullanici.isim !== undefined && this.aktifKullanici.rol !== '')  {//tanımlı değilse işlemleri yapma.yani boş degilse aşğ gerçekleşir
                //this.aktifKullanici.rol!= '' yukarıda boş tanımlaması yapıldıgı için kıyaslama '' böyle olmalı
            //güncelleme işlemi idsi varsa yani sıfırdan büyükse bu bir güncelleme işleemi
                //else ise kaydet işlemi
                if(this.aktifKullanici.id>0){ //aktif kullanicinin idsi varsa bu bir güncelleme işlemidir
/*öncelikle kullanıcı buldurulur. this.kullanicilar.find(x=>x.id === this.aktifKullanici.id)
x=>x.id === this.aktifKullanici.id  =>> id degeri benim düzenleme yapmak istediğim kullanicinın idsi olan kaydı dizi içerisinde buluyorum */
            let kullanici = this.kullanicilar.find(x=>x.id === this.aktifKullanici);
            // gönderdiğimiz aktif kullanici idsi bulunur
                    kullanici = this.aktifKullanici; //bu dizi içerisinde ki kulllanıcıyı benim model içerisinde tanımlamış oldugum yeni bilgiler aktif kullanici
                    //içerisindeydi buna eşitliyorum.böylelikle o tablodaki o satırı güncellemiş oluyorum



                }else{

                this.kullanicilar.push({
                id: this.kullanicilar.length + 1,
                isim: this.aktifKullanici.isim,
                rol: this.aktifKullanici.rol

            })}
            //temizleme
            this.aktifKullanici= {};
            //daha sonra pencereyi kapatalım (gizleme)
            $('#kullaniciModal').modal('hide');
        }
    },
/*
* her silme işleminden sonra index degerinin sıfırdan başlar
* */
        kullaniciSil(index)   {

        this.kullanicilar.splice(index,1);

        },
        /*Idye göre
        * ilk olarak silmek istenilen kullanıcı ilk olarak bulunması gerekli
        * find komutu herhangi bi dizi içerisindeki bir degeri bulmamızı sağlıyor
        * === id) şu kısım daki id paprametre  olarak gelen id
        *dizi içerisindeki elemanlardaki idsi (x.id) benim gönderdiğim id olan kaydı buldu
        *
        * //önce kullanıcı bulundu(find olan satırda)

        * kullanicinin idsine göre filtreleme işlemi yapıldı
        *      this.kullanicilar = this.kullanicilar.filter(x=>x.id === kullanici.id)
                açıklama: sadece seçilen kayıt filtrelendi.
                *
                *  this.kullanicilar = this.kullanicilar.filter(x=>x.id === kullanici.id)
                * araya !== bu koyulursa kullanicinin id sine eşit olmayanları getirip listeler
        *  */
           kullaniciSil2( id )   {
            const kullanici = this.kullanicilar.find(x=>x.id === id)
                if(kullanici !== null){
                    this.kullanicilar = this.kullanicilar.filter(x=>x.id !== kullanici.id)
}},
/*this.aktifkullanici yani modal açtırılcak => aktif kullanıcıyı bu indexe ait kullanıcı olarak tanımlıyıcam
*  = this.kullanicilar  [index] açıklama
* this.kullanicilar içerisindeki indexi => benim gönderdiğim index olan kaydı aktif kullaniya eşitle
*  index neyse kullanicilar dizisindeki bu degeri otomatik olarak aktif kullaniciya aktarmış olacak
*
* asg modal ekranda gösterilir
$('#kullaniciModal').modal('hide');
*  */
        kullaniciDuzenle(index){
                    this.aktifKullanici = this.kullanicilar  [index];
                   $('#kullaniciModal').modal('show');

               },


    }
})