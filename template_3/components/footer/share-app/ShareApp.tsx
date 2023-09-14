import styles from './share-app.module.scss';

const ShareApp = () => {
  return (
    <div className={styles.share_app}>
      <div className={styles.share_app__title}>
        Share mobile app
      </div>
      <div className={styles.share_app__image_section}>
        <div className={styles.share_app__share_icon}></div>
        <div className={styles.share_app__qr_icon}></div>
      </div>
    </div>
  );
};

export default ShareApp;