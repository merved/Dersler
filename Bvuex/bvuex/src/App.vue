<template >
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;" v-if="profilResmi2">
          <img class="card-img-top"
               :src="profilResmi2" alt="Profil Resmi">
          <div class="card-body">

            <h5 class card-title>
              {{ adsoyad }}
              <span class = "badge badge-success" v-if="populerMi">Populer</span>

              <p class="card-text">
                {{ $store.state.kullaniciModule.aktifKullanici.Unvan}}</p>

              <p class="card-text">

                {{ $store.state.kullaniciModule.aktifKullanici.BegeniSayisi}}   Beğenisi var</p>

            </h5>
          </div>
        </div>
      </div>
      <div class="col">
        <profil></profil>
      </div>
      <div class="col">
        <profil></profil>
      </div>
    </div>

<hr>
    <!-- profile.vue içerisindeki profil i kullanırsak -->

    <hr>
    <!--Buton Oluşturma -->
<!--
    <button @click="KullaniciAyarla2" class="btn btn-primary mr-2">Kullanıcı Ayarla </button>
    <button @click="BegeniArttir2" class="btn btn-success mr-1" >Begeni arttır </button>
    <button @click="BegeniArttirAsync2" class="btn btn-success mr-1" >Begeni arttır(Async)</button>
    <button @click="BegeniAzalt2" class="btn btn-danger ">Begeni azalt </button>
-->
    <button @click="KullaniciAyarla3" class="btn btn-primary mr-2">Kullanıcı Ayarla </button>
    <button @click="BegeniArttir2" class="btn btn-success mr-1" >Begeni arttır </button>
    <button @click="BegeniArttirAsync2" class="btn btn-success mr-1" >Begeni arttır(Async)</button>
    <button @click="BegeniAzalt3" class="btn btn-danger ">Begeni azalt </button>

  </div>
</template>

<script>
/*getter degerlerini property olarak almak yerine  mapGettersHelper metoduyla
*  */
import { mapGetters, mapActions } from 'vuex'
import Profil from "./components/Profile";
export default {
  name: 'App',
  //kullanılacak componentler tanımlanır.
  components: {Profil},
  created() {
    this.$store.commit('KullaniciAyarla')
},

  //daha sonra dizi olarak almak istediğimiz getterların adını
  //computed içinde hem mapGetters kullanmak hemde ayrıca computed alan oluşturmak
  //istersek bunun için --> süslü parantez içerisine alıyoruz --> üç nokta koyuyoruz
  //split operatörü sayesinde --> ekstra computed alanları ekleyebiliriz
  computed: {

    profilResmi2() {
      if (this.$store.state.kullaniciModule.aktifKullanici.ProfilResmi)
      //require dinamik olarak yüklemeyi sağlar
      return require ('./assets/' + this.$store.state.kullaniciModule.aktifKullanici.ProfilResmi);
    },
    ... mapGetters(['populerMi', 'adsoyad'])

  },
  //hangi actionlar kullanılaacaksa tanımlanır.
  methods: {
    //payload gönderilecegi durumda aşağıdaki gibi ayrı tanımlanır.
    BegeniArttir2() {
      this.$store.dispatch('BegeniArtir3', { deger: 1 })

    },
    BegeniArttirAsync2() {
      this.$store.dispatch('BegeniArttirAsync', { deger: 2})

    },

    ...mapActions([

      'KullaniciAyarla3',
      'BegeniAzalt3'
])}
  /*methods:{
   KullaniciAyarla2() {
      //çağrılmak istenen mutation adı KullaniciAyarla
   // this.$store.commit('KullaniciAyarla');
      //action metodunu dispatch komutu ile çağırıyoruz.
      /*action dispatch yapıldıktan sonra bi işlem yaptırmak isteseydik.
      bu promise bi nesne old. için then dedikten sonra da başka bi işlemi gerçekleştirebilirdiniz.
      aşağıdaki gibi blok tanımlayıp, bu dispatch işlemi başarılı
     bi şekilde gerçekleştikten sonra then blogunu böylelikle kullanabiliriz
      promise nesneleri bunu sağlar.
      this.$store.dispatch('KullaniciAyarla3').then(() =>{});
    },

  BegeniArttir2() {
   // this.$store.commit('BegeniArttir', { deger : 4 });
    this.$store.dispatch('BegeniArttir3', { deger: 1})

        },

  BegeniAzalt2(){
    //this.$store.commit('BegeniAzalt');
    this.$store.dispatch('BegeniAzalt3')

  },
    BegeniArttirAsync2() {
      // this.$store.commit('BegeniArttir', { deger : 4 });
      this.$store.dispatch('BegeniArttirAsync', { deger: 1})

    },

  },*/
}

</script>

<style>

@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css);

</style>
