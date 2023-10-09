export type Notice = {
  _id?: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  previewImage?: {
    _type: "image";
    alt: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  subtitle: string;
  content: any;
  slug: {
    current: string;
  };
  writtenBy: string;
  location: any;
};
