import { IPropsMenu } from "../../constants/menu";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import styles from "./Header.module.scss";

interface IProps {
  menu?: IPropsMenu[];
  themeSwitch: React.ReactNode;
}

const Header = ({ menu, themeSwitch }: IProps): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        {menu && menu.map((item) => <ItemMenu item={item} />)}
      </div>
      <div>{themeSwitch}</div>
    </nav>
  );
};

export default Header;
