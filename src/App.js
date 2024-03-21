import "./App.css";

function VehicleCard({ model }) {
  return <h2>{model}</h2>;
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
