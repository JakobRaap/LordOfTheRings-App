import { volumes } from "../../lib/data";
import Link from "next/link";

export default function fellowship() {
  function findBook(booktitle) {
    const book = volumes.find(({ slug }) => slug === booktitle);
    return book;
  }

  const book = findBook("the-two-towers");
  console.log(book);
  return (
    <>
      <Link href="../volumes">go back</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        <li>
          {book.books[0].ordinal}: {book.books[0].title}
        </li>
        <li>
          {" "}
          {book.books[1].ordinal}: {book.books[1].title}
        </li>
      </ul>
      <footer>
        <Link href="/volumes/the-fellowship-of-the-ring">Previous</Link>{" "}
        <Link href="/volumes/the-return-of-the-king">Next</Link>
      </footer>
    </>
  );
}
