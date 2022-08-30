import logo from "./logo.svg";
import "./App.css";

// function myAddFun() {
//   var count = 13;
//   ++count;
// }
var Bookcount = 13;
function myAddFunBook() {
  Bookcount++;

  console.log(Bookcount);
  document.getElementById("new1").innerHTML = +Bookcount;
}

function myRemFunBook() {
  Bookcount--;
  console.log(Bookcount);
  document.getElementById("new1").innerHTML = Bookcount;
}

var pencount = 10;
function myAddFunPens() {
  pencount++;

  console.log(pencount);
  document.getElementById("new2").innerHTML = +pencount;
}

function myRemFunPens() {
  pencount--;
  console.log(pencount);
  document.getElementById("new2").innerHTML = pencount;
}
var NoteBookcount = 44;
function myAddFunNoteBook() {
  NoteBookcount++;

  console.log(NoteBookcount);
  document.getElementById("new3").innerHTML = +NoteBookcount;
}

function myRemFunNoteBook() {
  NoteBookcount--;
  console.log(NoteBookcount);
  document.getElementById("new3").innerHTML = NoteBookcount;
}
var inkpencount = 78;
function myAddFunInkPens() {
  inkpencount++;

  console.log(inkpencount);
  document.getElementById("new4").innerHTML = +inkpencount;
}

function myRemFunInkPens() {
  inkpencount--;
  console.log(inkpencount);
  document.getElementById("new4").innerHTML = inkpencount;
}

function App() {
  return (
    <div className="items">
      <span>Books:</span>
      <button className="addBook" onClick={myAddFunBook}>
        +
      </button>
      <button className="remBook" onClick={myRemFunBook}>
        -
      </button>
      <span className="totalBooks">
        <h4 id="new1"></h4>
      </span>

      <span>Pens:</span>
      <button className="addPen" onClick={myAddFunPens}>
        +
      </button>
      <button className="remPen" onClick={myRemFunPens}>
        -
      </button>
      <span className="totalPens">
        {" "}
        <h4 id="new2"></h4>
      </span>
      <span>Notebooks:</span>
      <button className="addNotebook" onClick={myAddFunNoteBook}>
        +
      </button>
      <button className="remNotebook" onClick={myRemFunNoteBook}>
        -
      </button>
      <span className="totalNotebooks">
        <h4 id="new3"></h4>
      </span>
      <span>InkPens:</span>
      <button className="addInkpen" onClick={myAddFunInkPens}>
        +
      </button>
      <button className="remInkpen" onClick={myRemFunInkPens}>
        -
      </button>
      <span className="totalInkpens">
        <h4 id="new4"></h4>
      </span>
    </div>
  );
}

export default App;
