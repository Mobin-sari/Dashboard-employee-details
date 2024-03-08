import { photoData } from "../data/photoData";

import styles from "../styles/headerDetailspage.module.css";

function HeaderDetailPage({ data }) {
  const avatar = photoData.find((item) => item.id === data.id);
  
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div>
            <p className={styles.name}>{data.name}</p>
          </div>
          <div>
            <p className={styles.company}>{data.company.name}</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p  className={styles.username}>{data.username}</p>
            </div>
            <div>
              <p  className={styles.city}>{data.address.city}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className={styles.avatar}
          src={`${avatar.avatar}`}
          alt={data.username}
        />
      </div>
    </div>
  );
}

export default HeaderDetailPage;
