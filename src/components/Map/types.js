import type { Kit } from '../Kit/types';

export type Map = {
  name: string,
  width: number,
  height: number,
  length: number,
  items: Array<Kit>,
};
