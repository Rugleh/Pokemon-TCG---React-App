import React from 'react'


export const SelectSet = ({setSet}) => {

  const handleButton = (e) => {
    setSet(e.target.value);
  };

  const sets = [
    { name: "base1" },
    { name: "base2" },
    { name: "basep" },
    { name: "base3" },
    { name: "base4" },
    { name: "base5" },
    { name: "gym1"  },
    { name: "gym2"  },
  ];


  return (
    <div className="py-4">
      {sets.map((set) => (
        <button
          className={"btn btn-primary mx-2 my-2 " + (set.name).toLowerCase()}
          key={set.name}
          value={set.name}
          onClick={handleButton}
        >
          {set.name}
        </button>
      ))}
    </div>
  )
}
