import React, { useState } from "react";
import { useTable } from "react-table";
import { FaEdit, FaPlus } from "react-icons/fa";
import "./TableComponent.css";

function TableComponent({ columns, data}) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Số dòng mỗi trang

  const pageCount = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: paginatedData });

  return (
    <div className="table-container">
      <div className="table-header mb-2">
        {/* <button
          onClick={handleAddClick}
          className="add-btn bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center space-x-2"
        >
          <FaPlus className="text-lg" />
          <span>Add New Order</span>
        </button> */}
      </div>

      <table {...getTableProps()} className="custom-table">
        {/* Table header */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>

        {/* Table body */}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <td>
                  <button
                    className="edit-btn"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination items-center">
        <div className=" pagination-info">{data.length} results</div>
        <div className="flex gap-1">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 disabled:opacity-50"
          >
            {"<"}
          </button>
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 ${
                currentPage === index + 1
                  ? "active bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageCount))
            }
            disabled={currentPage === pageCount}
            className="px-3 py-1 disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
