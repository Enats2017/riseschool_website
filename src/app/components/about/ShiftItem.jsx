import styles from './ShiftBox.module.css';

export const ShiftItem = ({ fromText, toText }) => {
  return (
    <div className={`${styles.shiftBox} shift-box flex items-center gap-6 p-6 bg-white shadow-sm rounded-lg`}>
      <div className={styles.before}>
        <p className="text-gray-400 text-[16px]">{fromText} </p>
      </div>
      <div className={styles.arrow}>
        {/* <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> */}
        <p className="transform rotate-90 md:rotate-0">
        ➤
        </p>
      </div>
      <div className={styles.after}>
        <p className="font-semibold text-[16px]" style={{ color: "#831719" }}>
          {toText}
        </p>
      </div>
    </div>
  );
};
