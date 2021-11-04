import styles from "./HeaderContent.module.css";
const HeaderContent = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div style={{ textAlign: "right" }} class="col">
            Column
          </div>
          <div class="col-8 p-5">
            <h4>A picture is worth a thousand words</h4>
            <p>
              It clearly and beautifully captures your emotions- the joy, the
              laughter, the tears, you name it. Our pride is in offering the
              best shoots as we help you tell your story in photos.
            </p>
            <button className={`${styles.btn} ${styles.success}`}>
              View Gallery
            </button>
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
