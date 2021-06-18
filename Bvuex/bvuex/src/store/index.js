import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let storeObj = {
    state: {
        aktifKullanici: {}
    },
    getters: {
        adsoyad: state => state.aktifKullanici.Ad + ' ' + state.aktifKullanici.Soyad,
        populerMi: state => state.aktifKullanici.BegeniSayisi > 20
    },
    mutations: {
        KullaniciAyarla(state) {
            state.aktifKullanici = {
                Ad: 'merve',
                    Soyad: 'dem',
                    Unvan: 'Yazılım Geliştirme Uzmanı',
                    BegeniSayisi: 25,
                    ProfilResmi: 'pic1.jpg'
            };
        },
        BegeniArttir(state, payload){
            //gecikmeli hale getircez bi nevi asenkron duruma getircez
            //3sn sonra bu işlem yapılcak
           state.aktifKullanici.BegeniSayisi +=payload.deger;

            //payload -> obje
            //payload.deger -> obje içindeki değer demek oluyor



        },
        BegeniAzalt(state){
            state.aktifKullanici.
                BegeniSayisi--;

        }
    },
    actions: {
        KullaniciAyarla3(context) {
            context.commit('KullaniciAyarla');
        },
        BegeniArtir3: ({commit}, payload) => commit('BegeniArttir', payload),


        //bunu fonksiyon gibi yazıcaz
        //state içindeki bi deger kontrol edilerek de bi işlem yapılabilir.
        BegeniAzalt3({commit, state}) {
            if (state.aktifKullanici.BegeniSayisi > 0)
                commit('BegeniAzalt');
        },
        //actionlar içinde asenkron metotlar kullanmak
        //commit yazarak--> context içerisinden commit dogrudan alınır
        BegeniArttirAsync( { commit} , payload) {
            //promise fonk: promise nesnesi oluşturuldu
            //bu nesne iki tane durum içermekte
            //1-resolve 2-reject
            return new Promise((resolve, reject ) => {
setTimeout(() =>   {
    //BegeniArttir asenkron bi promise nesnesi içerisine bu şekilde tanımlanır.
    //3 sn sonrasında bu commiti gerçekleştirsin
    //bu işlem tamamlandıktan sonra da resolve fonk çağrılır.
    commit('BegeniArttir', payload);
    resolve();
    }, 3000)


            })
        }
    }
};
//obje olarak aşağıdaki şekilde tanımlanır.
export default new Vuex.Store({
modules:{
  kullaniciModule: storeObj
}
});