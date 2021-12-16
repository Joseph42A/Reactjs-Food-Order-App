import { useNavigate } from "react-router-dom";

export default function Orders() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/", { replace: true });
  }
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>(Under Building)</h1>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
