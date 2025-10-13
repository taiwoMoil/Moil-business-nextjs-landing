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
    <div className="flex items-center justify-center md:justify-end mr-0 md:mr-4 gap-2 md:gap-4">
      <button
        onClick={onPrevPage}
        className={`${
          currentPage <= 1 ? "cursor-not-allowed" : "cursor-pointer"
        } select-none p-2 md:p-4`}
        disabled={currentPage <= 1}
      >
        <svg
          width="24"
          height="24"
          className="md:w-[30px] md:h-[30px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 6L9 12L15 18" stroke="#CCCCCC" strokeWidth="2" />
        </svg>
      </button>
      <div className="px-2 py-1 md:px-[13.5px] md:py-[5.5px] rounded-md border border-[#5843BD] text-[#5843BD] text-xs md:text-sm font-medium flex justify-center items-center w-8 h-8 md:w-11 md:h-11">
        {currentPage}
      </div>
      <button
        onClick={onNextPage}
        className={` ${
          currentPage >= totalPages ? "cursor-not-allowed" : "cursor-pointer"
        } select-none p-2 md:p-4`}
        disabled={currentPage >= totalPages}
      >
        <svg
          width="24"
          height="24"
          className="md:w-[30px] md:h-[30px]"
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
          className="cursor-pointer p-2 md:p-[10px] h-8 md:h-11 rounded-md border border-[#979696] flex justify-center items-center text-ellipsis max-w-[100px] md:max-w-[150px] text-xs md:text-sm"
        >
          {pageNumbers.map((pageNumber) => (
            <option
              key={pageNumber}
              className="text-xs md:text-sm text-[#5C6168] font-medium"
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