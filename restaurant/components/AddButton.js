import styles from "../styles/AddButton.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div>
      <button onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add New Pizza
      </button>
    </div>
  );
};

export default AddButton;
