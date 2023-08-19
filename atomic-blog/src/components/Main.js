import Posts from "./Posts";
import FormAddPost from "./FormAddPost";
function Main({ onAddPost }) {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}

export default Main;
