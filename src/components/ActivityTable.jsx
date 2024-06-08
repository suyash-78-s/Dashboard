import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ActivityTable = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/records.json')
      .then(response => {
        console.log(response.data); // Debugging: Log the data to see its structure
        const fetchedData = response.data;
        const userDetails = fetchedData.data.AuthorWorklog.rows.find(row => row.name === name);
        setData(userDetails);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  if (!data) {
    return <div>No data available for this user</div>;
  }

  return (
    <div>
      
      <center><h2>Email : {data.name}</h2>
      <h3>Total Activity</h3></center>
      
      <table>
      <thead>
          <tr>
            <th>Activity </th>
            <th>Value</th>
          </tr>
        </thead>
       <tbody>
       {data.totalActivity.map((activity, index) => (
        <tr key={index}>
          
            <td>{activity.name}</td>
            <td>{activity.value}</td>
          </tr>
        ))}
       </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
