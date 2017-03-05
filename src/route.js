import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

import routes from "./router.config.js"

var router = new VueRouter({
	routes,
	mode:"history"
})

export default router