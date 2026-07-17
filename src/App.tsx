import ListGroup from "./components/ListGroup";
export default function App() {
  let cities = ["new york", "tokyo", "ilam", "london"];
  return (
    <>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={(item: string) => console.log(item)}
      />
    </>
  );
}
