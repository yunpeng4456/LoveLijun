<template>
    <div class="wrapper">

        <div>
            <img :src="origin+'/lovelijun/avatar1.jpg'" style="width: 60px; border-radius: 50%;">
            <img :src="origin+'/lovelijun/z.webp'"/>
            <img :src="origin+'/lovelijun/avatar2.jpg'" style="width: 60px; border-radius: 50%;">
        </div>
        <div class="love-time">
            <div><h2>我们相恋了<span style="color:red;">❤</span></h2></div>
            <div class="timer">
                <b>
                    {{days}}
                </b>
                Days
                <b>
                    {{hours}}
                </b>
                Hours
                <b>
                    {{minutes}}
                </b>
                Minutes
                <b>
                    {{seconds}}
                </b>
                Seconds

            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "Dashboard",
        components: {

        },
        data() {
            return {
                origin:'http://miao-yunpeng.gitee.io',//location.origin
                days:0,
                minutes:0,
                hours:0,
                seconds:0

            };
        },

        created() {
            this.calcTime();
        },
        mounted() {


            this.interval = setInterval(this.calcTime,1000);


        },
        computed: {

        },

        watch: {},

        methods: {
            //
            calcTime(){
                let t1= moment('2020-12-25 20:00:00');

                let t2 = moment();

                //计算时间差并转换成标准时间单位

                this.days = t2.diff(t1, 'day')
                this.hours = t2.diff(t1, 'hour')%24;
                this.minutes = t2.diff(t1, 'minute')%60;
                this.seconds = t2.diff(t1, 'second')%60;

            }


        },

        destroyed() {
            if(this.interval){
                clearInterval(this.interval)
            }
        }

    };
</script>

<style lang="scss">
    body{
        -webkit-font-smoothing: antialiased;
        font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    }
    .wrapper{
        transform: translate(0, -50%);
        text-align: center;
        position: relative;
        width: 100%;
        top: 150px;
    }
    .love-time{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .timer{
        font-size: 180%;
        line-height: 1.5;
        b{
            color:rgb(253, 99, 125);
        }
    }

</style>
