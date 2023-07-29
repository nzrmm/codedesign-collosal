export type IFeature = {
  icon: string,
  title: string,
  description: string,
};

export type ICompanyLogo = {
  src: string,
  alt: string,
};

export type IProject = {
  title: string,
  description: string,
};

export type IService = {
  name: string,
  price: string,
  descriptions: string[],
  textColor: string,
  backgroundColor: string,
};

export type ITestimonial = {
  name: string,
  company: string,
  photo: string,
  description: string,
}