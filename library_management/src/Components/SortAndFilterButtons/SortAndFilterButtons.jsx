export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button className="sortByTitleAsc btn btn-outline-secondary">
        sort title in Ascending order
      </button>
      <button className="sortByTitleDesc btn btn-outline-secondary">
        sort title in Descending order
      </button>
      <button className="sortByPriceAsc btn btn-outline-secondary">
        sort price in Ascending order
      </button>
      <button className="sortByPriceDesc btn btn-outline-secondary">
        sort price in Descending order
      </button>
    </div>
  );
};
