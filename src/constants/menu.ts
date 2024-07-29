export interface IPropsMenu {
  id: number;
  name: string;
  alias: string;
  hash: string;
}
const MENU: IPropsMenu[] = [
  { id: 1, name: "Home", alias: "home", hash: "#home" },
  { id: 2, name: "About", alias: "about", hash: "#about" },
  { id: 3, name: "Skill", alias: "skill", hash: "#skill" },
  { id: 4, name: "Contact", alias: "contact", hash: "#contact" },
];
const USER = {};

export { MENU, USER };
