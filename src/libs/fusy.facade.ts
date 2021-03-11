import { Injectable } from '@nestjs/common';
import Fuse from 'fuse.js';

@Injectable()
export class FusyFacade {
  findItemsByString<T>(
    items: T[],
    searchString: string,
    options?: Fuse.IFuseOptions<T>,
  ) {
    const fuse = new Fuse(items, options);
    return fuse.search(searchString).map(({ item }) => item);
  }
}
