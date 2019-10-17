/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import BlogComponent from '@/entities/blog/blog.vue';
import BlogClass from '@/entities/blog/blog.component';
import BlogService from '@/entities/blog/blog.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('b-alert', {});
localVue.component('b-badge', {});
localVue.directive('b-modal', {});
localVue.component('b-button', {});
localVue.component('router-link', {});

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {}
  }
};

describe('Component Tests', () => {
  describe('Blog Management Component', () => {
    let wrapper: Wrapper<BlogClass>;
    let comp: BlogClass;
    let blogServiceStub: SinonStubbedInstance<BlogService>;

    beforeEach(() => {
      blogServiceStub = sinon.createStubInstance<BlogService>(BlogService);
      blogServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<BlogClass>(BlogComponent, {
        store,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          blogService: () => blogServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      blogServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllBlogs();
      await comp.$nextTick();

      // THEN
      expect(blogServiceStub.retrieve.called).toBeTruthy();
      expect(comp.blogs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      blogServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeBlog();
      await comp.$nextTick();

      // THEN
      expect(blogServiceStub.delete.called).toBeTruthy();
      expect(blogServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
