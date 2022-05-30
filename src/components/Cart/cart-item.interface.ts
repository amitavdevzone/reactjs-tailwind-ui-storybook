export interface ICartItem {
  name: string;
  image: string;
  metaItems: Array<IMetaItems>;
}

export interface IMetaItems {
  name: string;
  value: string;
}
