import { useEffect, useState } from 'react';
import './App.css'
import Table from './components/Table.tsx';
import { Assignment, AssignmentResponse } from './types.tsx';

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await fetch("api/project_assignments");
      const data = await res.json();

      const parsedData: Assignment[] = data.map((item:AssignmentResponse) => ({
        employee_id: item.employee_id.employee_id.toString(),
        employee_name: item.employee_id.full_name,
        project_name: item.project_code.project_name,
        start_date: item.start_date
      }))
      
      setAssignments(parsedData);
    }
    fetchAssignments();
    const interval = setInterval(fetchAssignments, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center pt-10'>
      <h1 className='text-3xl font-bold mb-10'>Project Assignments</h1>
      <Table data={assignments}/>
    </div>
  )
}

export default App