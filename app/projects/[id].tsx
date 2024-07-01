import { useRouter } from 'next/router';

const Project: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Project {id}</h1>
      <p>Detailed information about project {id}.</p>
    </div>
  );
};

export default Project;
