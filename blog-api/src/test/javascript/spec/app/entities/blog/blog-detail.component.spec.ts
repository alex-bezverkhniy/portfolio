/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import BlogDetailComponent from '@/entities/blog/blog-details.vue';
import BlogClass from '@/entities/blog/blog-details.component';
import BlogService from '@/entities/blog/blog.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Blog Management Detail Component', () => {
    let wrapper: Wrapper<BlogClass>;
    let comp: BlogClass;
    let blogServiceStub: SinonStubbedInstance<BlogService>;

    beforeEach(() => {
      blogServiceStub = sinon.createStubInstance<BlogService>(BlogService);

      wrapper = shallowMount<BlogClass>(BlogDetailComponent, { store, localVue, provide: { blogService: () => blogServiceStub } });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundBlog = { id: 123 };
        blogServiceStub.find.resolves(foundBlog);

        // WHEN
        comp.retrieveBlog(123);
        await comp.$nextTick();

        // THEN
        expect(comp.blog).toBe(foundBlog);
      });
    });
  });
});
