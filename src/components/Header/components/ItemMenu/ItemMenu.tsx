import styles from "./ItemMenu.module.scss";
import { IPropsMenu } from "../../../../constants/menu";

interface IPropsItemMenu {
  item: IPropsMenu;
}

const ItemMenu = ({ item }: IPropsItemMenu) => {
  const { name } = item;
  return <a className={styles.item}>{name}</a>;
};
export default ItemMenu;
