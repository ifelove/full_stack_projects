import React from "react";
import { useGlobalContext } from "../context";

const FilterComponent = () => {
  const container = React.useRef(null);
  const { filterableItems, filterLocation, isFilterOpen, setIsFilterOpen } =
    useGlobalContext();
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
          <h6>Sort Items</h6>
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
          <h6>Filter Items</h6>
          <main className="filter-main">
            <input
              type="text"
              placeholder="search content"
              className="filter-search"
            />
          </main>
          <section className="checkbox-section">
            {" "}
            {filterableItems.map((item, index) => {
              return (
                <div key={index}>
                  <label htmlFor="">
                    <input type="checkbox" className="checkbox" />
                    {item}
                  </label>
                </div>
              );
            })}
          </section>
          <div className="filter-button">
            <button>Ok</button>
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
