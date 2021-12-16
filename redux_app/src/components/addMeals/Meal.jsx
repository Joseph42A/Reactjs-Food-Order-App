import "./Meal.css";

export default function Meal() {
  return (
    <div className="mealform">
      <div className="input-controls">
        <div className="input-control-add">
          <label htmlFor="foodname">FOOD NAME</label>
          <br />
          <input type="text" className="input" />
        </div>

        <div className="input-control-add">
          <label htmlFor="description">Dscription (20chr)</label>
          <br />
          <input type="text" className="input" />
        </div>

        <div className="input-control-add">
          <label htmlFor="price">PRICE $</label>
          <br />
          <input type="text" className="input" />
        </div>

        <div className="warning">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            porro consequatur, dicta nam voluptatum at cum amet blanditiis
            cupiditate ducimus?
          </p>
        </div>

        <div className="btn-addmeal">
          <button>ADD FOOD</button>
        </div>
      </div>
    </div>
  );
}
