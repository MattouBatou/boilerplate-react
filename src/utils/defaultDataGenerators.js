export const barDataGenerator = numPoints => {
  if (!numPoints) return;

  let pieData = [];
  let names = ["Shared Services", "Contracting", "Other", "Other", "Other"];

  for (let i = 0; i <= numPoints; i++) {
    const value1 = Math.floor(Math.random() * Math.floor(100));
    const value2 = Math.floor(Math.random() * Math.floor(100));
    const name = names[i];

    pieData.push({ name, value1, value2 });
  }

  return pieData;
};

export const lineDataGenerator = numPoints => {
  if (!numPoints) return;

  let lineData = [];

  let months = ["Jan", "Feb", "March", "April", "May"];

  for (let i = 0; i <= numPoints; i++) {
    const name = months[i];
    const uv = Math.floor(Math.random() * Math.floor(40));
    const pv = Math.floor(Math.random() * Math.floor(40));
    const amt = Math.floor(Math.random() * Math.floor(40));

    lineData.push({ name, uv, pv, amt });
  }

  return lineData;
};

export const pieDataGenerator = numPoints => {
  if (!numPoints) return;

  let pieData = [];
  let cells = [
    { name: "Shared Services", color: "#ff5200" },
    { name: "Contracting", color: "#4fbfd7" },
    { name: "Other", color: "#f6b12f" },
    { name: "Other", color: "#da1e28" },
    { name: "Other", color: "#55ba8c" }
  ];

  for (let i = 0; i <= numPoints; i++) {
    const value = Math.floor(Math.random() * Math.floor(100));
    const name = cells[i].name;

    pieData.push({ name, color: cells[i].color, value });
  }

  return pieData;
};
