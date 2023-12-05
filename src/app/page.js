import Dogs from "./Dogs";
import Memes from "./Memes";
import Pokemon from "./Pokemon";

export default function Home() {
  return (
    <main>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <Memes />
      <Pokemon />
    </main>
  );
}
