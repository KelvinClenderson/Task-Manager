import React from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [text, setText] = React.useState("");
  const [description, setdescription] = React.useState("");
  return (
    <div className=" space-y-4 p-4 bg-slate-400 rounded-md flex flex-col shadow">
      <input
        className="border border-slate-500 outline-slate-500 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa "
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>

      <textarea
        className="border border-slate-500 outline-slate-500 px-4 py-2 rounded-md w-full h-32" // w-full para largura total e h-32 para altura
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></textarea>

      <button
        onClick={() => {
          // Verifica se o texto está vazio
          if (!text.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos");
          }

          onAddTaskSubmit(text, description);
          setText("");
          setdescription("");
        }}
        className="bg-sky-800 text-white rounded-md px-4 py-2 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
