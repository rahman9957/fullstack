import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const tambahTodo = () => {
    if (todo !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Masukkan kegiatan"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={tambahTodo}>Tambah</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
