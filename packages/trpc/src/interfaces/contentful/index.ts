export interface ContentfulField {
  heroBanner: {
    fields: {
      file: {
        url: string;
        details: { image: { width: number; height: number } };
      };
    };
  };
}
