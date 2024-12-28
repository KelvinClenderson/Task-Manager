import { useEffect, useState } from "react"; // Importando hooks do React
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 as uuidv4 } from "uuid";
import Tittle from "./components/Tittle";
import Bg from "./components/BgColor";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] // Carregando tarefas do localStorage
  );

  // Salva as tarefas sempre que o estado 'tasks' mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function getasksFetch() {
      // Chama a API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=7",
        {
          method: "GET",
        }
      );

      // Pega os dados que ela retorna
      const data = await response.json();

      // Mapeia os dados para o formato esperado
      const formattedData = data.map((task) => ({
        id: task.id, // Mantém o id da tarefa
        text: task.title, // Ajusta para o formato "text"
        description: "", // A API não retorna uma descrição, então você pode deixar vazio
        isCompleted: task.completed, // Ajusta para o formato "isCompleted"
      }));

      // Armazena/persiste os dados no state
      setTasks(formattedData);
    }

    getasksFetch();
  }, []);

  // Função que lida com a conclusão de uma tarefa
  function onTaskClicked(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted, // Alterna o status da tarefa
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  // Função que lida com a exclusão de uma tarefa
  function onDeleteTaskClicked(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // Função que lida com o envio de uma nova tarefa
  function onAddTaskSubmit(text, description) {
    const newTask = {
      id: uuidv4(), // Gerando um ID único
      text,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <Bg>
      <div className="w-[800px] h-full space-y-4">
        <Tittle>Gerenciador de Tarefas</Tittle>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        {/* Empty State */}
        {tasks.length === 0 ? (
          <div className="empty-state text-center text-slate-300">
            <img
              src="/img/emptyState.png" // Caminho para a imagem
              alt="Empty State"
              className="mx-auto mb-4" // Centraliza a imagem e adiciona margem inferior
            />
            <p>Você ainda não tem tarefas. Adicione uma para começar!</p>
          </div>
        ) : (
          <Tasks
            tasks={tasks}
            onTaskClicked={onTaskClicked}
            onDeleteTaskClicked={onDeleteTaskClicked}
          />
        )}
      </div>
    </Bg>
  );
}

export default App;
