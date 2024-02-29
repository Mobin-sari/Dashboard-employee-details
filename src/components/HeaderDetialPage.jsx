import { photoData } from "../data/photoData";

import styles from "../styles/headerDetailspage.module.css";

function HeaderDetailPage({ data }) {
  const avatar = photoData.find((item) => item.id === data.id);
  console.log(avatar);
  return (
    <div>
      <div>
        <div>
          <h1>{data.name}</h1>
        </div>
        <div>
          <p>{data.company.name}</p>
        </div>
      </div>
      <div>
        <div>
          <p>{data.username}</p>
        </div>
        <div>
          <p>{data.address.city}</p>
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
