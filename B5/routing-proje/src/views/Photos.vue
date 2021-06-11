<template>
    <div class="container">
        <h1>Photos</h1>
        <div class="card" style="width: 18rem" v-if="photo">
          <!-- v-if =photo demek data içerisinde bi foto varsa yani nulldan farklıysa-->
            <img :src="photo.url" class="card-img-top">
            <div class="card-body">
                <p class="card-text">{{ photo.title }}</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                photo: null
            }
        },
        created() {
          //sayfa oluştugu anda fetchData bi kerelik çağrılır.

            this.fetchData();
        },
        watch: {

            $route: "fetchData"
        },
        methods: {
            fetchData() {
                fetch('http://jsonplaceholder.typicode.com/photos/' + this.$route.params.id)
                    .then(response => response.json())
                    .then(json => {
                        this.photo = json;
                    });
              /*
            gelen veri kullanacagım this.photo ya eşitlenebilir.
            *json dan gelen datayı ->tihs.photo içine eşitleyebiliriz.
            özet olarak;
            bu adresteki json verisini çektikten sonra
            data içerisinde yer alan photo içerisine eşitlemiş olduk.

            */
            }
        }

    }
</script>