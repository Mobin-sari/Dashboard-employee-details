import { photoData } from "../data/photoData";

import styles from "../styles/introduction.module.css";

function IntroductionEmployee({ data }) {
  const photo = photoData.find((item) => item.id === data.id);

  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src={`${photo.image}`}
            alt={data.name}
            style={{ width: "100px" }}
          />
        </div>
        <div>
          <div>
            <p>Full name:</p>
            <p>{data.name}</p>
          </div>
          <div>
            <p>Email:</p>
            <p>{data.email}</p>
          </div>
          <div>
            <p>Phone number:</p>
            <p>{data.phone}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Username:</p>
            <p>{data.username}</p>
          </div>
          <div>
            <p>Website:</p>
            <p>{data.website}</p>
          </div>
          <div>
            <p>Company:</p>
            <p>{data.company.name}</p>
          </div>
        </div>
        <div>
          <div>
            <p>City:</p>
            <p>{data.city}</p>
          </div>
          <div>
            <p>Address:</p>
            <p>{data.address.street}</p>
            <p>{data.address.suite}</p>
            <p>{data.address.zipcode}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionEmployee;
