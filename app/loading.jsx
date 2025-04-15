import classes from "./loading.module.css";

function LoadingPage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.loader}>
            Loading
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
