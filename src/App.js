// import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Vogue', theme: 'fashion', isAvailable: true },
  { id: 2, title: 'GQ', theme: 'fashion', isAvailable: true },
  { id: 3, title: 'Womens Health', theme: 'health', isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style= {{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}


const book = {
  title: 'Cannery Row',
  author: 'John Steinbeck',
  published: '1945',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cannery_Row_%281945_1st_ed_dust_jacket%29.jpg/330px-Cannery_Row_%281945_1st_ed_dust_jacket%29.jpg',
  width:'264',
  height: '378'
};
function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + 'cover'}
        style = {{
          width: book.width,
          height: book.height
        }}
      />
    </div>
  );
}


function MagicButton() {
  return (
    <div>
      <h3>This is a button, press it.</h3>
      <button>Button</button>
    </div>

  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>List of some magazines: </h2>
      <ZineRack />
      <Bookshelf />
      <MagicButton />
      </header>
    </div>
  );
}

export default App;
