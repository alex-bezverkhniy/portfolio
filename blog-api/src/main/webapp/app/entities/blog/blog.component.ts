import { Component, Inject, Vue } from 'vue-property-decorator';
import { IBlog } from '@/shared/model/blog.model';
import AlertService from '@/shared/alert/alert.service';

import BlogService from './blog.service';

@Component
export default class Blog extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('blogService') private blogService: () => BlogService;
  public currentSearch = '';
  private removeId: number = null;
  public blogs: IBlog[] = [];

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
    this.retrieveAllBlogs();
  }

  public search(query): void {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.retrieveAllBlogs();
  }

  public clear(): void {
    this.currentSearch = '';
    this.retrieveAllBlogs();
  }

  public retrieveAllBlogs(): void {
    this.isFetching = true;

    if (this.currentSearch) {
      this.blogService()
        .search(this.currentSearch)
        .then(
          res => {
            this.blogs = res;
            this.isFetching = false;
          },
          err => {
            this.isFetching = false;
          }
        );
      return;
    }
    this.blogService()
      .retrieve()
      .then(
        res => {
          this.blogs = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IBlog): void {
    this.removeId = instance.id;
  }

  public removeBlog(): void {
    this.blogService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A Blog is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllBlogs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
