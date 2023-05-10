import React from "react";
import { useGlobalContext } from "../context";

const FilterComponent = () => {
  const container = React.useRef(null);

  const {
    filterableItems,
    filterLocation,
    isFilterOpen,
    setIsFilterOpen,
    filterableObjects,
    ischecked,
    setIschecked,
    itemName,
    setItemName,
    userInfo,
    setUserInfo,
  } = useGlobalContext();

 // let filtering = [...filterableItems];

 

  console.log(userInfo.result);
  console.log(userInfo.languages)

 // React.useEffect(() => {
  //  console.log(userInfo.result);
  //  console.log(userInfo.languages);
 // }, [userInfo]);

  const handleCheckboxChange = (e, position) => {
    let { value, checked } = e.target;
    const { languages, result } = userInfo;

    // console.log(result)
    const updatedState = result.map((item, index) =>
      index === position ? !item : item
    );
const updatedLanguage=languages.map((item,index)=>
index===position? null:item)



    //  console.log(value);
    //  console.log(checked);

    if (checked) {
      //  console.log("yes checked");
//console.log('updatedlanguage',updatedLanguage);
      setUserInfo({
        languages: [...languages, value],
        result: [...updatedState],
      });
    } else {//console.log('updatedlanguage',updatedLanguage);

      //   console.log("no unchecked");
      setUserInfo({
        languages: languages.filter((e) => e != value),
        result: [...updatedState],
      });
    }

    //   console.log(userInfo.languages);
    //  console.log(userInfo.result);
  };

  // console.log(itemName);

  const handleOkFilter = (e) => {
    e.preventDefault();
    console.log(userInfo);

    /** 
let checkboxes = document.querySelectorAll('input');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value)});
                console.log(values)
                console.log(userInfo.result);

*/
    //console.log(e)
  };

  React.useEffect(() => {
    const filterContainer = container.current;
    const { center, bottom } = filterLocation;
    filterContainer.style.left = `${center - 129}px`;
    //filterContainer.style.top = `${bottom}px`;
  }, [isFilterOpen]);

  return (
    <div
      className={`${
        isFilterOpen ? "filter-container show" : "filter-container"
      }`}
      ref={container}
      // onMouseOut={() => setIsFilterOpen(!isFilterOpen)}
    >
      <section className="main-section">
        <div className="sort-section">
          <h6>Sort {filterableObjects.text}</h6>
          <div className="sort">
            <span>T</span>
            <span>Sort Ascend Order</span>
          </div>
          <div className="sort">
            <span>T</span>
            <span>Sort Descend Order</span>
          </div>
        </div>
        <section className="filter-section">
          <h6>Filter {filterableObjects.text}</h6>
          <main className="filter-main">
            <input
              type="text"
              placeholder="search content"
              className="filter-search"
            />
          </main>
          <section className="checkbox-section">
            {filterableItems.map((item, index) => {
              return (
                <div key={index}>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name={filterableObjects.text}
                      className="checkbox"
                      value={item}
                      checked={userInfo.result[index]}
                      onChange={(e) => handleCheckboxChange(e, index)}
                    />
                    {item}
                  </label>
                </div>
              );
            })}
          </section>
          <div className="filter-button">
            <button onClick={handleOkFilter}>Ok</button>
            <span>
              <button>Cancel</button>
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FilterComponent;
