import { Component, Inject, Vue } from 'vue-property-decorator';
import { ICategory } from '@/shared/model/category.model';
import AlertService from '@/shared/alert/alert.service';

import CategoryService from './category.service';

@Component
export default class Category extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('categoryService') private categoryService: () => CategoryService;
  public currentSearch = '';
  private removeId: number = null;
  public categories: ICategory[] = [];

  public isFetching = false;
  public dismissCountDown: number = this.$store.getters.dismissCountDown;
  public dismissSecs: number = this.$store.getters.dismissSecs;
  public alertType: string = this.$store.getters.alertType;
  public alertMessage: any = this.$store.getters.alertMessage;

  public getAlertFromStore() {
    this.dismissCountDown = this.$store.getters.dismissCountDown;
    this.dismissSecs = this.$store.getters.dismissSecs;
    this.alertType = this.$store.getters.alertType;
    this.alertMessage = this.$store.getters.alertMessage;
  }

  public countDownChanged(dismissCountDown: number) {
    this.alertService().countDownChanged(dismissCountDown);
    this.getAlertFromStore();
  }

  public mounted(): void {
    this.retrieveAllCategorys();
  }

  public search(query): void {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.retrieveAllCategorys();
  }

  public clear(): void {
    this.currentSearch = '';
    this.retrieveAllCategorys();
  }

  public retrieveAllCategorys(): void {
    this.isFetching = true;

    if (this.currentSearch) {
      this.categoryService()
        .search(this.currentSearch)
        .then(
          res => {
            this.categories = res;
            this.isFetching = false;
          },
          err => {
            this.isFetching = false;
          }
        );
      return;
    }
    this.categoryService()
      .retrieve()
      .then(
        res => {
          this.categories = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: ICategory): void {
    this.removeId = instance.id;
  }

  public removeCategory(): void {
    this.categoryService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A Category is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllCategorys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
