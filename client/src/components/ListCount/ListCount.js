import React from "react";
import "./ListCount.css";
const ListCount = () => {
  // Dummy data
  const data = [
    { name: "John Doe", domain: "Technology", company: "ABC Corp" },
    { name: "Jane Smith", domain: "Finance", company: "XYZ Inc" },
    { name: "Michael Johnson", domain: "Marketing", company: "123 Industries" },
    { name: "Emily Davis", domain: "Engineering", company: "Tech Solutions" }
  ];

  return (
    <div className="listCount">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Company</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.domain}</td>
              <td>{item.company}</td>
              <td>
                <button className="chat-button">Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCount;
