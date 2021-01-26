import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

const constantRouterMap =[
    {
        path:'/dashboard',
        component:Dashboard
    },


];
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => console.log(err))
}

export default new Router({
    routes:constantRouterMap
})
