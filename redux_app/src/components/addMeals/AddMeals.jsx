import { Routes, Route, Link, Outlet } from "react-router-dom";

export default function AddMeals() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <Link to="meal">
        <div className="btn-addmeal btn-meals">
          <button>ADD FOOD</button>
        </div>
      </Link>
      {/* <Routes>
        <Route path="meal" element={<h3>Meal</h3>} />
      </Routes> */}
      <Outlet />
    </div>
  );
}
