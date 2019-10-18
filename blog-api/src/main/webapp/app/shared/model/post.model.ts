import { IBlog } from '@/shared/model/blog.model';
import { ITag } from '@/shared/model/tag.model';
import { ICategory } from '@/shared/model/category.model';

export interface IPost {
  id?: number;
  title?: string;
  content?: any;
  date?: Date;
  blog?: IBlog;
  tags?: ITag[];
  categories?: ICategory[];
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public content?: any,
    public date?: Date,
    public blog?: IBlog,
    public tags?: ITag[],
    public categories?: ICategory[]
  ) {}
}
