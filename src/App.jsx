/*
    Gamae 
     -> Board
        -> Square
    -> Historo
*/


function Square({value}) {
  return (
    <button className="bg-white border border-1 border-gray-400 w-12 h-12 leading-9 m-2 text-lg">
      {value}
    </button>
  );
}


export default function Board() {
  return (
    <>
      <div>
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div>
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div>
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}
