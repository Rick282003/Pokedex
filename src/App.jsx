import Card from './components/cards/Card';

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <Card
        imgURL="https://picsum.photos/id/260/280/200"
        title="Card 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        actionLabel="Add"
      />

      <Card
        imgURL="https://picsum.photos/id/251/280/200"
        title="Card 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        actionLabel="Remove"
      />

      <Card
        imgURL="https://picsum.photos/id/255/280/200"
        title="Card 3"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        actionLabel="Add"
      />
    </>
  )
}

export default App
