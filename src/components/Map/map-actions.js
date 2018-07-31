const createKit = (id, typeID) => ({
  type: '@MAP/CREATE_KIT',
  id,
  typeID,
});

/**
 * Delete kit object by property id
 * This id functions as a hash table identifier
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
const deleteKit = (id: string) => ({
  type: '@MAP/DELETE_KIT',
  id,
});

const renameMap = (value: string) => ({
  type: '@MAP/RENAME',
  value,
});

const resizeMapWidth = (value: number) => ({
  type: '@MAP/RESIZE_WIDTH',
  value,
});

const resizeMapHeight = (value: number) => ({
  type: '@MAP/RESIZE_HEIGHT',
  value,
});

type Fn<T> = (...args: Array<any>) => T;
type ExtractReturn = <T>(Fn<T>) => T;

export type Action =
  | $Call<ExtractReturn, typeof createKit>
  | $Call<ExtractReturn, typeof deleteKit>
  | $Call<ExtractReturn, typeof renameMap>
  | $Call<ExtractReturn, typeof resizeMapWidth>
  | $Call<ExtractReturn, typeof resizeMapHeight>;

export { createKit, deleteKit, renameMap, resizeMapWidth, resizeMapHeight };
