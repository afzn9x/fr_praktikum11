import { useEffect, useState } from "react";

const Counter = () => {
  const [angka, setAngka] = useState(0);

  const addAngka = () => {
    setAngka(angka + 1);
  };

  function updateDom() {
    console.log("LifeCycle : Mount");

    document.title = `Hasil : ${angka}`;
  }
  useEffect(updateDom, [angka]);

  console.log("Render");

  return (
    <div>
      <p>Hasil : {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
};

export default Counter;
