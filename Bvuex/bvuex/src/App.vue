<template >
  <div class="container">
    <div class="card" style="width: 18rem;" v-if="profilResmi2">
      <img class="card-img-top"
           :src="profilResmi2" alt="Profil Resmi">
           <div class="card-body">

                <h5 class card-title>
                {{ adsoyad }}
                  <span class = "badge badge-success" v-if="populerMi">Populer</span>

                  <p class="card-text">
                    {{ $store.state.aktifKullanici.Unvan}}</p>

                  <p class="card-text">

  {{ $store.state.aktifKullanici.BegeniSayisi}}   Beğenisi var</p>

                </h5>
    </div>
    </div>
<hr>
    <!--Buton Oluşturma -->
    <button @click="KullaniciAyarla2" class="btn btn-primary mr-2">Kullanıcı Ayarla </button>
    <button @click="BegeniArttir2" class="btn btn-success mr-1" >Begeni arttır </button>
    <button @click="BegeniAzalt2" class="btn btn-danger ">Begeni azalt </button>

  </div>
</template>

<script>
/*getter degerlerini property olarak almak yerine  mapGettersHelper metoduyla
*  */
import { mapGetters } from 'vuex'
export default {
  name: 'App',
created() {
    this.$store.commit('KullaniciAyarla')
},

  //daha sonra dizi olarak almak istediğimiz getterların adını
  //computed içinde hem mapGetters kullanmak hemde ayrıca computed alan oluşturmak
  //istersek bunun için --> süslü parantez içerisine alıyoruz --> üç nokta koyuyoruz
  //split operatörü sayesinde --> ekstra computed alanları ekleyebiliriz
  computed: {

    profilResmi2() {
      if (this.$store.state.aktifKullanici.ProfilResmi)
      //require dinamik olarak yüklemeyi sağlar
      return require ('./assets/' + this.$store.state.aktifKullanici.ProfilResmi);
    },
    ... mapGetters(['populerMi', 'adsoyad'])

  },
  methods:{
    KullaniciAyarla2() {
      //çağrılmak istenen mutation adı KullaniciAyarla
    this.$store.commit('KullaniciAyarla');
    },

  BegeniArttir2() {
    this.$store.commit('BegeniArttir', { deger : 4 });
    },

  BegeniAzalt2(){
    this.$store.commit('BegeniAzalt');

  },
},
}

</script>

<style>

@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css);

</style>
