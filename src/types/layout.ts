export type ILink = {
  label: string,
  href: string,
}

export type IFooter = {
  services: ILink[],
  company: ILink[],
  resources: ILink[]
}