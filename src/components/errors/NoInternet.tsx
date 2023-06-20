import NoIssueImg from "../../assets/images/no-internet.png";

const NoInternet = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <img src={NoIssueImg} alt="" width="30%" height="30%" />
      <h1>No Internet, please connect....</h1>
    </div>
  );
};

export default NoInternet;
