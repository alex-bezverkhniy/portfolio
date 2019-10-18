import Vue from 'vue';
import Component from 'vue-class-component';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import BlogNavbar from '@/core/blog-navbar/blog-navbar.vue';

@Component({
  components: {
    ribbon: Ribbon,
    'blog-navbar': BlogNavbar,
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,

    'jhi-footer': JhiFooter
  }
})
export default class App extends Vue {}
