import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function Contest() {
  const [data, setData] = useState({});
  const [user_Name, setuserName] = useState("");
  useEffect(() => {
    axios
      .get(`https://codeforces.com/api/user.rating?handle=${user_Name}`)
      .then((res) => {
        setData(res.data);
      });
  }, [user_Name]);

  console.log(data);
  const setuserNameChange = (e) => {
    setuserName(e.target.value);
  };
  console.log(user_Name);
  return (
    <div className="table-container">
      <div>
        <textarea
          name=""
          onChange={setuserNameChange}
          id=""
          cols="30"
          rows="2"
        ></textarea>
      </div>
      {data.status === "OK" && data.result.length > 0 && (
        <table className="contest-table">
          <thead>
            <tr>
              <th>Contest Name</th>
              <th>Rank</th>
              <th>Old Rating</th>
              <th>New Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.result.map((contest) => (
              <tr key={contest.contestId}>
                <td>{contest.contestName}</td>
                <td>{contest.rank}</td>
                <td>{contest.oldRating}</td>
                <td>{contest.newRating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Contest;
