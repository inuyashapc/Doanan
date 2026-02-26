import axios from "axios";
import { useEffect, useState } from "react";

export default function CallApi() {
  const [data, setData] = useState([]);
  //   async await la bat dong bo, chi dung duoc trong function async
  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        console.log("🚀 ========= result:", result.data);
        setData(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <table
        border={1}
        cellPadding={10}
        cellSpacing={0}
        style={{ margin: "20px auto" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.email}</td>
                <td>{p.name}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
