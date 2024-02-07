import React, { useState, useEffect } from 'react'
import axios from 'axios';
import List from './list';
import { baseURL } from '../baseURL';

function Dashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get(`${baseURL}/dashboard`);
        setLogs(response["data"]);
      } catch (e) {
        console.log(e);
      }
    }
    try{
      fetchAllData();
    }catch(e){
        console.log(e);
    }
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Request</th>
            <th scope="col">Response</th>
            <th scope="col">timeTaken(ms)</th>
            <th scope="col">inputToken</th>
            <th scope="col">outputToken</th>
          </tr>
        </thead>
        <tbody>

          {
            logs.map((log) => {
              return <List log ={log}/>
            })
          }
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;