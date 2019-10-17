import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import UserService from '@/admin/user-management/user-management.service';

import AlertService from '@/shared/alert/alert.service';
import { IBlog, Blog } from '@/shared/model/blog.model';
import BlogService from './blog.service';

const validations: any = {
  blog: {
    name: {
      required,
      minLength: minLength(3)
    },
    handle: {
      required,
      minLength: minLength(2)
    },
    description: {}
  }
};

@Component({
  validations
})
export default class BlogUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('blogService') private blogService: () => BlogService;
  public blog: IBlog = new Blog();

  @Inject('userService') private userService: () => UserService;

  public users: Array<any> = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.blogId) {
        vm.retrieveBlog(to.params.blogId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.blog.id) {
      this.blogService()
        .update(this.blog)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Blog is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.blogService()
        .create(this.blog)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Blog is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveBlog(blogId): void {
    this.blogService()
      .find(blogId)
      .then(res => {
        this.blog = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.userService()
      .retrieve()
      .then(res => {
        this.users = res.data;
      });
  }
}
