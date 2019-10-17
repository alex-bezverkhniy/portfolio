/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import PostDetailComponent from '@/entities/post/post-details.vue';
import PostClass from '@/entities/post/post-details.component';
import PostService from '@/entities/post/post.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Post Management Detail Component', () => {
    let wrapper: Wrapper<PostClass>;
    let comp: PostClass;
    let postServiceStub: SinonStubbedInstance<PostService>;

    beforeEach(() => {
      postServiceStub = sinon.createStubInstance<PostService>(PostService);

      wrapper = shallowMount<PostClass>(PostDetailComponent, { store, localVue, provide: { postService: () => postServiceStub } });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundPost = { id: 123 };
        postServiceStub.find.resolves(foundPost);

        // WHEN
        comp.retrievePost(123);
        await comp.$nextTick();

        // THEN
        expect(comp.post).toBe(foundPost);
      });
    });
  });
});
