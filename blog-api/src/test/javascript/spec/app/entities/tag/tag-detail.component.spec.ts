/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import TagDetailComponent from '@/entities/tag/tag-details.vue';
import TagClass from '@/entities/tag/tag-details.component';
import TagService from '@/entities/tag/tag.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Tag Management Detail Component', () => {
    let wrapper: Wrapper<TagClass>;
    let comp: TagClass;
    let tagServiceStub: SinonStubbedInstance<TagService>;

    beforeEach(() => {
      tagServiceStub = sinon.createStubInstance<TagService>(TagService);

      wrapper = shallowMount<TagClass>(TagDetailComponent, { store, localVue, provide: { tagService: () => tagServiceStub } });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundTag = { id: 123 };
        tagServiceStub.find.resolves(foundTag);

        // WHEN
        comp.retrieveTag(123);
        await comp.$nextTick();

        // THEN
        expect(comp.tag).toBe(foundTag);
      });
    });
  });
});
