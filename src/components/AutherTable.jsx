import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AutherTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/records.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { AuthorWorklog } = data.data;

  return (
        <div>
          <nav className="navbar navbar-light bg-black">
            <div className="container-fluid">
                <h1>Devdynamics.ai</h1>
            </div>
          </nav>

      <table border="1" className="table">
      
      <thead>
          <tr className='text-light bg-dark'>
            <th>Email </th>
            <th>Total Activity</th>
            <th>DayWiseActivity</th>
          </tr>
        </thead>
      
        
       
        <tbody>
          {AuthorWorklog.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.name}</td>
              <td>
                <Link className='btn btn-primary' to={`/details/email/${encodeURIComponent(row.name)}`}>
                  click here
                </Link>
              </td>
              <td>
                <Link className='btn btn-secondary ' to={`/details/day/${encodeURIComponent(row.name)}`}>
                  click here
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  )
}

export default AutherTable



