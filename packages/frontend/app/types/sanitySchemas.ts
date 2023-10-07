export type Notice = {
  _id?: string;
  _createdAt?: string;
  _updatedAt?: string;

  title: string;
  subtitle: string;
  content: any;
  slug: {
    current: string;
  };
  writtenBy: string;
  location: any;
};
