import "./Notification.css";

export default function Notification(props) {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "error";
  }

  if (props.status === "success") {
    specialClasses = "success";
  }

  const cssClass = `notification ${specialClasses}`;

  return (
    <section className={cssClass}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
}
