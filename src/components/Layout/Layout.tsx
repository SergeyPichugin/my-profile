import styles from "./Layout.module.scss";

const Layout = ({ ...props }) => {
  const { children } = props;
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
