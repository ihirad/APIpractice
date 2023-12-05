export default async function Memes() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const info = await response.json();
  const memes = info.data.memes;

  return (
    <div id="memes-section">
      <h2>memes</h2>
      <p>
        Here's an API to fetch random memes:{" "}
        <a href="https://api.imgflip.com/get_memes" target="_blank">
          https://api.imgflip.com/get_memes
        </a>
      </p>
      <div id="meme-container">
        {memes.map((meme) => {
          return (
            <img key={meme.id} src={meme.url} className="meme-images"></img>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
