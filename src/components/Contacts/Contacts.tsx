import styles from "./Contacts.module.scss";
const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        Email: <a href="email:8490839@mail.ru">8490839@mail.ru</a>
      </div>
      <div>Telegram: @sergey.pichugin</div>
    </div>
  );
};
export default Contacts;
