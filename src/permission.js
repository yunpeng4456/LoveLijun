import router from './router'




router.beforeEach((to, from, next) => {

        /* has token */
        if (to.path === '/') {
            next({ path: '/dashboard' })
        } else {
            next()
        }


});
