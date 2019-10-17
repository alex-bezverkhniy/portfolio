import { IUser } from '@/shared/model/user.model';
import { IPost } from '@/shared/model/post.model';

export interface ICategory {
  id?: number;
  name?: string;
  description?: string;
  user?: IUser;
  posts?: IPost[];
}

export class Category implements ICategory {
  constructor(public id?: number, public name?: string, public description?: string, public user?: IUser, public posts?: IPost[]) {}
}
