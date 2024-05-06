import React, { useState } from "react";

export const MainComponent = () => {
  const [inprogress, setInprogress] = useState([
    { id: 1, text: "Implement the frontend", list: "inprogress" },
    { id: 2, text: "Implement the backend", list: "inprogress" },
    { id: 3, text: "Define REST endpoints", list: "inprogress" },
  ]);

  const [completed, setCompleted] = useState([
    { id: 4, text: "Finalize the requirement", list: "completed" },
    { id: 5, text: "Design the architecture", list: "completed" },
    { id: 6, text: "Database setup", list: "completed" },
  ]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetList, targetIndex) => {
    e.preventDefault();
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));

    // Remove the dropped item from its original list
    if (droppedItem.list === "inprogress") {
      setInprogress((prevList) =>
        prevList.filter((item) => item.id !== droppedItem.id)
      );
    } else {
      setCompleted((prevList) =>
        prevList.filter((item) => item.id !== droppedItem.id)
      );
    }

    // Update the dropped item's list property and insert it at the target index
    droppedItem.list = targetList;
    if (targetList === "inprogress") {
      setInprogress((prevList) => {
        const newList = [...prevList];
        newList.splice(targetIndex, 0, droppedItem);
        return newList;
      });
    } else {
      setCompleted((prevList) => {
        const newList = [...prevList];
        newList.splice(targetIndex, 0, droppedItem);
        return newList;
      });
    }
  };

  return (
    <div className="container">
      <h1>Task Scheduler</h1>
      <h2>In progress Tasks</h2>
      <div
        onDragOver={handleDragOver}
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "20px",
        }}
        onDrop={
          inprogress.length === 0 ? (e) => handleDrop(e, "inprogress", 0) : undefined
        }
      >
        {inprogress.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "5px",
            }}
            onDrop={(e) => handleDrop(e, "inprogress", index)}
            onDragOver={handleDragOver}
          >
            {item.text}
          </div>
        ))}
      </div>
      <h2>Completed Tasks</h2>
      <div
        onDragOver={handleDragOver}
        style={{ border: "1px solid black", padding: "10px" }}
        onDrop={
          completed.length === 0 ? (e) => handleDrop(e, "completed", 0) : undefined
        }
      >
        {completed.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "5px",
            }}
            onDrop={(e) => handleDrop(e, "completed", index)}
            onDragOver={handleDragOver}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
