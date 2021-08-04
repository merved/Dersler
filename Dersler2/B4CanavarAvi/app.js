new Vue({
    el: "#app",
    data: {

        player_heal: 100,
        monster_heal: 100,
        game_is_on: false,
        //kendi içerisinde objelere sahip olacak.
        //1.turn diye 2. text
        /* turn tutulmasının nedeni: 'li' leri v-for ile dönerken
      li lerin türünü anlayabilmemiz lazım.Bu li nincanavar tarafından mı oyuncu
      tarafından mı oluşturuldugunu biliyor olmamız lazım ki ona göre
       class ismi bind edilmesi lazım monster turn yada player turn
       Bunu yapmam için benim  buradaki log un nerden geldiğini biliyor olmam lazım

       turn "" -> burda ya mosnter yazacak yada player
       text "" -> orada yazacak değer
       */
        logs : [],
        attack_multiple : 10,
        special_attack_multiple: 25,
        monster_attack_multiple : 25,
        heal_up_multiple:20
    },
    methods: {
        start_game: function () {
            this.game_is_on = true;
        },
        attack: function () {
// canavarın canını azaltma
// point isminde değişken oluşturalım
// point değişkenini virgülsüz elde etmek için ceil fonksşyonu kullanıldı.

            var point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            //saldırı edildikten sonra canavarda karşılık verdiği
            //için caavar metot çağrılır. Kendi canımdan da eksilme olur.
            this.add_to_log({turn : "p", text: "oyuncu atağı("+ point + ")"})
            this.monster_attack();
            console.log("M : " + this.monster_heal);
            console.log("P : " + this.player_heal);

        },
        speacial_attack: function () {
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal -= point;
            this.add_to_log({turn : "p", text: "özel oyuncu atağğı("+ point +")"})
            this.monster_attack();
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
        },
        //ilk yardım
        heal: function () {
            var point = Math.ceil(Math.random() * 20);
            //oyunucunun canını artırcak.yardım edecek
            this.player_heal += point;
            this.monster_attack();
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
            this.add_to_log({turn : "p", text: "ilk yardım("+ point +")"})

        },
        //vazgeçmek
        give_up: function () {
            this.player_heal = 0;
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
            this.add_to_log({turn : "p", text: "Oyuncu pes etti("+ point +")"})

        },
        //biz saldırdığımız zaman canavar da karşılık verip saldırcak.
        monster_attack: function () {
            var point = Math.ceil(Math.random() * 15);
            this.player_heal -= point;
            // turn kısmında isimlendirmeyi m vermişiz bunun kontrolünü
            //index.html içindeki   :class="{ 'player-turn' : log.turn =='p', 'monster-turn' : log.turn =='m' }"
            //şeklinde vermişiz
            this.add_to_log({turn : "m", text: "Canavar Atağı ("+ point +")"})

        },
        //log  diye bi tane obje tanımlarım
        add_to_log  :function (log){
            this.logs.push(log)
        }


    },
    watch :{
        //izlemek istediğimiz değişken isminde bi tane property tanımlarım
        //bu bir functiondı
        //içerisine parametre olarak value alıyordu
        //aldıgı value player__heal in değişen value su player_heal 1 oldu ->value da 1
        //oyuncu için
        player_heal : function (value){
//eğer value sıfırdan küçük eşitse pleyer_heal in değeri=0
            if(value <=0 ) {
                this.player_heal = 0;
                if(confirm("Oyunu Kaybettin.Tekrar denemek ister misiniz?")){
                    //oyunun başa dönmesi lazım
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            }
            else if (value >=100){
                this.player_heal=100;
            }

        },
        monster_heal : function (value){
            if(value <= 0){
                //canavar sıfıra düşerse -> player yani oyuncu kazanmış olur
                this.monster_heal = 0;
                if(confirm ("Oyunu Kazandın. Tekrar denemek ister misin")){
                    this.player_heal=100;
                    this.monster_heal = 100;
                    //sıfıra düştügünde log temizleme
                    this.logs= [];
                }

            }
            else if (value >=100){
                this.monster_heal=100;            }
        }
    }
})
/*oyunun başlayıp başlamadıgını beli eden bi tane değişkenimiz olsun
    * start_game butonuna bastıgımda game_is_on true olacak*/