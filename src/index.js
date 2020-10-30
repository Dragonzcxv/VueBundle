//Базовые стили проекта
import './style/style.scss';
import './style/layout/work.scss';
import './style/layout/admin-wysiwyg.scss';
import './style/layout/layout.scss';

//Подключение блоков
import * as blocks from './components/blocks/blocks';
//const _ = require('lodash');
//const axios = require('axios');
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{path: '/', component: blocks.GridExample},
];

const router = new VueRouter({
	routes
});

new Vue({
	router,
	el: "#app",
	components: {
		'header-block': blocks.Header,
		'footer-block': blocks.Footer,
	}
});
