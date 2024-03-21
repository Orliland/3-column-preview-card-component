import "./App.css";

import Sedans from "./assets/icon-sedans.svg";
import Suvs from "./assets/icon-suvs.svg";
import Luxury from "./assets/icon-luxury.svg";

const vehicles = {
  sedans: {
    vehicleIcon: Sedans,
    vehicleDescription:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    vehicleColor: "orange",
  },
  suvs: {
    vehicleIcon: Suvs,
    vehicleDescription:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    vehicleColor: "teal",
  },
  luxury: {
    vehicleIcon: Luxury,
    vehicleDescription:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
    vehicleColor: "green",
  },
};

function VehicleCard({ model }) {
  const vehicle = vehicles[model];
  return (
    <article className={`vehicle vehicle--${vehicle.vehicleColor}`}>
      <img
        src={vehicle.vehicleIcon}
        alt="Vehicle Icon"
        className="vehicle__icon"
      />
      <h2 className="vehicle__name">{model.toUpperCase()}</h2>
      <p className="vehicle__description">{vehicle.vehicleDescription}</p>
      <button className="button">Learn More</button>
    </article>
  );
}

function Vehicles() {
  return (
    <main className="vehicles">
      <VehicleCard model="sedans" />
      <VehicleCard model="suvs" />
      <VehicleCard model="luxury" />
    </main>
  );
}

export default Vehicles;
