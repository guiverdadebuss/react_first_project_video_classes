import { useSearchParams } from "react-router";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da Tarefa
        </h1>
        <div className="bg-slate-200 p-4 rounded-mg">
          <h1 className="text-xl font-bold text-slate-600">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
