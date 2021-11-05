import styles from "./HeaderContent.module.css";
import arrowLeft from "../../assets/ArrowLeft.png";
import arrowRight from "../../assets/ArrowRight.png";
const HeaderContent = () => {
  return (
    <>
      <div className={styles.headerContent}>
        <div class="container">
          <div class="row">
            <div class="col">
              <div className={styles.arrowLeft}>
                <img src={arrowLeft} alt="" />
              </div>
            </div>
            <div class="col-8 p-5 ">
              <h4 className="fw-bold">A picture is worth a thousand words</h4>
              <p>
                It clearly and beautifully captures your emotions- the joy, the
                laughter, the tears, you name it. Our pride is in offering the
                best shoots as we help you tell your story in photos.
              </p>
              <button className={`${styles.btn} ${styles.success}`}>
                View Gallery
              </button>
            </div>
            <div className="col">
              <div className={styles.arrowRight}>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
