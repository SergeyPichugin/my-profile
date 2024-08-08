import styles from "./Contacts.module.scss";
const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <a href="https://github.com/SergeyPichugin" target="_blank">
          github.com/SergeyPichugin
        </a>
      </div>
      <div>
        <a href="email:8490839@mail.ru">8490839@mail.ru</a>
      </div>
      <div>
        <a href="https://t.me/sergeypichugin" target="_blank">
          tg@sergeypichugin
        </a>
      </div>
      <div>
        <a href="https://vk.com/beatbig" target="_blank">
          vk.com/beatbig
        </a>
      </div>
    </div>
  );
};
export default Contacts;
