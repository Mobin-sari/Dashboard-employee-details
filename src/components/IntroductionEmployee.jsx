import { photoData } from "../data/photoData";

import styles from "../styles/introduction.module.css";

function IntroductionEmployee({ data }) {
  const photo = photoData.find((item) => item.id === data.id);

  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={`${photo.image}`} alt={data.name} />
        </div>
        <div>
          <div>
            <div>
              <span className={styles.label}>Full name:</span>
            </div>
            <div>
              <span className={styles.data}>{data.name}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.label}>Email:</span>
            </div>
            <div>
              <span className={styles.data}>{data.email}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.label}>Phone number:</span>
            </div>
            <div>
              <span className={styles.data}>{data.phone}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span className={styles.label}>Username:</span>
            </div>
            <div>
              <span className={styles.data}>{data.username}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.label}>Website:</span>
            </div>
            <div>
              <span className={styles.data}>{data.website}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.label}>Company:</span>
            </div>
            <div>
              <span className={styles.data}>{data.company.name}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span className={styles.label}>City:</span>
            </div>
            <div>
              <span className={styles.data}>{data.address.city}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.label}>Address:</span>
            </div>
            <div>
              <span className={styles.data}>{data.address.street}</span>
              <span className={styles.data}>{data.address.suite}</span>
              <span className={styles.data}>{data.address.zipcode}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionEmployee;
