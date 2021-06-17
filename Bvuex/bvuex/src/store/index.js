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
            setTimeout(() => {
                state.aktifKullanici.
                    BegeniSayisi += payload.deger;
            }, 8000);

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
        BegeniArttir3: ({commit}) =>
            commit('BegeniArttir'),

        //bunu fonksiyon gibi yazıcaz
//state içindeki bi deger kontrol edilerek de bi işlem yapılabilir.
        BegeniAzalt3({commit, state}) {
            if (state.aktifKullanici.BegeniSayisi > 0)
                commit('BegeniAzalt');
        },
    }
};
//obje doğrudan aşağıdaki şekilde alındı
export default new Vuex.Store(storeObj);