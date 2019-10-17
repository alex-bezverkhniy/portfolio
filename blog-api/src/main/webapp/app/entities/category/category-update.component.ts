import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import UserService from '@/admin/user-management/user-management.service';

import PostService from '../post/post.service';
import { IPost } from '@/shared/model/post.model';

import AlertService from '@/shared/alert/alert.service';
import { ICategory, Category } from '@/shared/model/category.model';
import CategoryService from './category.service';

const validations: any = {
  category: {
    name: {
      required,
      minLength: minLength(2)
    },
    description: {}
  }
};

@Component({
  validations
})
export default class CategoryUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('categoryService') private categoryService: () => CategoryService;
  public category: ICategory = new Category();

  @Inject('userService') private userService: () => UserService;

  public users: Array<any> = [];

  @Inject('postService') private postService: () => PostService;

  public posts: IPost[] = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.categoryId) {
        vm.retrieveCategory(to.params.categoryId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.category.id) {
      this.categoryService()
        .update(this.category)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Category is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.categoryService()
        .create(this.category)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Category is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveCategory(categoryId): void {
    this.categoryService()
      .find(categoryId)
      .then(res => {
        this.category = res;
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
    this.postService()
      .retrieve()
      .then(res => {
        this.posts = res.data;
      });
  }
}
