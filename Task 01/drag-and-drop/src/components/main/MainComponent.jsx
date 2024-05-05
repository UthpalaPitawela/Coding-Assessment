import React, { useState } from "react";

export const MainComponent = () => {
  const [listA, setListA] = useState([
    { id: 1, text: "Item 1", list: "listA" },
    { id: 2, text: "Item 2", list: "listA" },
    { id: 3, text: "Item 3", list: "listA" },
  ]);

  const [listB, setListB] = useState([
    { id: 4, text: "Item 4", list: "listB" },
    { id: 5, text: "Item 5", list: "listB" },
    { id: 6, text: "Item 6", list: "listB" },
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
    if (droppedItem.list === "listA") {
      setListA((prevList) =>
        prevList.filter((item) => item.id !== droppedItem.id)
      );
    } else {
      setListB((prevList) =>
        prevList.filter((item) => item.id !== droppedItem.id)
      );
    }

    // Update the dropped item's list property and insert it at the target index
    droppedItem.list = targetList;
    if (targetList === "listA") {
      setListA((prevList) => {
        const newList = [...prevList];
        newList.splice(targetIndex, 0, droppedItem);
        return newList;
      });
    } else {
      setListB((prevList) => {
        const newList = [...prevList];
        newList.splice(targetIndex, 0, droppedItem);
        return newList;
      });
    }
  };

  return (
    <div className="container">
      <h1>Drag and Drop</h1>
      <h2>List A</h2>
      <div
        onDragOver={handleDragOver}
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "20px",
        }}
        onDrop={
          listA.length === 0 ? (e) => handleDrop(e, "listA", 0) : undefined
        }
      >
        {listA.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "5px",
            }}
            onDrop={(e) => handleDrop(e, "listA", index)}
            onDragOver={handleDragOver}
          >
            {item.text}
          </div>
        ))}
      </div>
      <h2>List B</h2>
      <div
        onDragOver={handleDragOver}
        style={{ border: "1px solid black", padding: "10px" }}
        onDrop={
          listB.length === 0 ? (e) => handleDrop(e, "listB", 0) : undefined
        }
      >
        {listB.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "5px",
            }}
            onDrop={(e) => handleDrop(e, "listB", index)}
            onDragOver={handleDragOver}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
