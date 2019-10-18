import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
import Router from 'vue-router';
const Home = () => import('../core/home/home.vue');
const About = () => import('../core/about/about.vue');
const Error = () => import('../core/error/error.vue');
const Register = () => import('../account/register/register.vue');
const Activate = () => import('../account/activate/activate.vue');
const ResetPasswordInit = () => import('../account/reset-password/init/reset-password-init.vue');
const ResetPasswordFinish = () => import('../account/reset-password/finish/reset-password-finish.vue');
const ChangePassword = () => import('../account/change-password/change-password.vue');
const Settings = () => import('../account/settings/settings.vue');
const JhiUserManagementComponent = () => import('../admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('../admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('../admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('../admin/configuration/configuration.vue');
const JhiDocsComponent = () => import('../admin/docs/docs.vue');
const JhiHealthComponent = () => import('../admin/health/health.vue');
const JhiLogsComponent = () => import('../admin/logs/logs.vue');
const JhiAuditsComponent = () => import('../admin/audits/audits.vue');
const JhiMetricsComponent = () => import('../admin/metrics/metrics.vue');
/* tslint:disable */
// prettier-ignore
const Blog = () => import('../entities/blog/blog.vue');
// prettier-ignore
const BlogUpdate = () => import('../entities/blog/blog-update.vue');
// prettier-ignore
const BlogDetails = () => import('../entities/blog/blog-details.vue');
// prettier-ignore
const Post = () => import('../entities/post/post.vue');
// prettier-ignore
const PostUpdate = () => import('../entities/post/post-update.vue');
// prettier-ignore
const PostDetails = () => import('../entities/post/post-details.vue');
// prettier-ignore
const Tag = () => import('../entities/tag/tag.vue');
// prettier-ignore
const TagUpdate = () => import('../entities/tag/tag-update.vue');
// prettier-ignore
const TagDetails = () => import('../entities/tag/tag-details.vue');
// prettier-ignore
const Category = () => import('../entities/category/category.vue');
// prettier-ignore
const CategoryUpdate = () => import('../entities/category/category-update.vue');
// prettier-ignore
const CategoryDetails = () => import('../entities/category/category-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/reset/request',
      name: 'ResetPasswordInit',
      component: ResetPasswordInit
    },
    {
      path: '/reset/finish',
      name: 'ResetPasswordFinish',
      component: ResetPasswordFinish
    },
    {
      path: '/account/password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: Settings,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/admin/user-management',
      name: 'JhiUser',
      component: JhiUserManagementComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/new',
      name: 'JhiUserCreate',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/edit',
      name: 'JhiUserEdit',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/view',
      name: 'JhiUserView',
      component: JhiUserManagementViewComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    }
    ,
    {
      path: '/entity/blog',
      name: 'Blog',
      component: Blog,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/blog/new',
      name: 'BlogCreate',
      component: BlogUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/blog/:blogId/edit',
      name: 'BlogEdit',
      component: BlogUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/blog/:blogId/view',
      name: 'BlogView',
      component: BlogDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/post',
      name: 'Post',
      component: Post,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/post/new',
      name: 'PostCreate',
      component: PostUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/post/:postId/edit',
      name: 'PostEdit',
      component: PostUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/post/:postId/view',
      name: 'PostView',
      component: PostDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/tag',
      name: 'Tag',
      component: Tag,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/tag/new',
      name: 'TagCreate',
      component: TagUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/tag/:tagId/edit',
      name: 'TagEdit',
      component: TagUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/tag/:tagId/view',
      name: 'TagView',
      component: TagDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/category',
      name: 'Category',
      component: Category,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/category/new',
      name: 'CategoryCreate',
      component: CategoryUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/category/:categoryId/edit',
      name: 'CategoryEdit',
      component: CategoryUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/category/:categoryId/view',
      name: 'CategoryView',
      component: CategoryDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
