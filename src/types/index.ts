export type ILink = {
  label: string,
  href: string,
}

export type IFooter = {
  services: ILink[],
  company: ILink[],
  resources: ILink[]
}

export type IOption = {
  label: string,
  value: string,
}

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
  id: string,
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

export type IContact = {
  icon: string,
  type: string,
  value: string
}