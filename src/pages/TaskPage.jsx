import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Tittle from "../components/Tittle";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const text = searchParams.get("text");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen  bg-sky-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeft />
          </button>
          <Tittle>Detalhes da Tarefa</Tittle>
        </div>
 <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl  font-bold text-slate-50">{text}</h2>
          <p className="text-slate-200">{description}</p>
        </div>      </div>
    </div>
  );
}

export default TaskPage;
