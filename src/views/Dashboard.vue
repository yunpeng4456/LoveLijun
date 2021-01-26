<template>
    <div class="wrapper">

        <div>
            <img :src="origin+'/lovelijun/avatar1.jpg'" style="width: 60px; border-radius: 50%;">
            <img :src="origin+'/lovelijun/z.webp'"/>
            <img :src="origin+'/lovelijun/avatar2.jpg'" style="width: 60px; border-radius: 50%;">
        </div>
    </div>
</template>

<script>

    export default {
        name: "Dashboard",
        components: {

        },
        data() {
            return {
                origin:location.origin

            };
        },

        created() {
            console.log()
        },
        mounted() {
        },
        computed: {



        },

        watch: {},

        methods: {
            //设置背景地图


        },

        destroyed() {

        }

    };
</script>

<style lang="scss">
    .wrapper{
        transform: translate(0, -50%);
        text-align: center;
        position: relative;
        width: 100%;
        top: 150px;
    }

</style>
