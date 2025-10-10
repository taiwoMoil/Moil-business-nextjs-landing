import React from "react";

interface PaginationBtnProps {
  totalPages: number;
  currentPage: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSelectPage: (page: number) => void;
}

function PaginationBtn({  
  totalPages,
  currentPage,
  onNextPage,
  onPrevPage,
  onSelectPage,
}: PaginationBtnProps) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = parseInt(event.target.value, 10);
    onSelectPage(selectedPage);
  };

  return (
    <div className="flex items-center justify-end mr-4">
      <button
        onClick={onPrevPage}
        className={`${
          currentPage <= 1 ? "cursor-not-allowed" : "cursor-pointer"
        } select-none p-4`}
        disabled={currentPage <= 1}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 6L9 12L15 18" stroke="#CCCCCC" strokeWidth="2" />
        </svg>
      </button>
      <div className="px-[13.5px] py-[5.5px] rounded-md border border-[#5843BD] text-[#5843BD] text-sm font-medium flex justify-center items-center w-11 h-11">
        {currentPage}
      </div>
      <button
        onClick={onNextPage}
        className={` ${
          currentPage >= totalPages ? "cursor-not-allowed" : "cursor-pointer"
        } select-none p-4`}
        disabled={currentPage >= totalPages}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 6L15 12L9 18" stroke="#CCCCCC" strokeWidth="2" />
        </svg>
      </button>

      <div>
        <select
          name="pages"
          id="pages"
          value={totalPages}
          onChange={handleSelectChange}
          className="cursor-pointer p-[10px] h-11 rounded-md border border-[#979696] flex justify-center items-center text-ellipsis max-w-[150px]"
        >
          {pageNumbers.map((pageNumber) => (
            <option
              key={pageNumber}
              className="text-sm text-[#5C6168] font-medium"
            >
              {pageNumber}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PaginationBtn;