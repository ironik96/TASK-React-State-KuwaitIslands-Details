export default function IslandForm({ island, incrementVisitors }) {
  let name = "";
  let phone = "";
  const onClickBook = () => {
    if (
      window.confirm(
        `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}?`
      )
    )
      incrementVisitors(island.id);
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Type Full Name"
        onChange={(event) => (name = event.target.value)}
      />
      <input
        type="tel"
        placeholder="Type Phone Number"
        onChange={(event) => (phone = event.target.value)}
      />
      <button className="book" onClick={onClickBook}>
        Book for today!
      </button>
    </div>
  );
}
