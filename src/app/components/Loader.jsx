import "./Loader.css"; // keep the CSS we wrote earlier

export const Loader = () => {
  return (
    <div id="pre-load" className="loader">
      <div className="loader-inner">
        <div className="loader-logo">
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};
