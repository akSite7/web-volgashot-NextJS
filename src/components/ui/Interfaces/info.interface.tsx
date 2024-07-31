export type Info = {
  id: number;
  attributes: {
    item: any;
    title: string;
    text: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}
