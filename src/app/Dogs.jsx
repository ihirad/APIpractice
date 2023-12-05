export default async function Dogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const info = await response.json();
  const dogs = info.message;

  return (
    <div id="dogs-section">
      <h2>Dogs</h2>
      <p>
        Here's an API to fetch 10 random dog{" "}
        <a href="https://dog.ceo/api/breeds/image/random/10" target="_blank">
          images:https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <div id="dog-container">
        {dogs.map((dog) => {
          return <img key={dog} src={dog} className="dog-images"></img>;
        })}
      </div>
      <hr />
    </div>
  );
}
