import "./App.css";

import logo from "./assets/images/Image 1858.png";
import logo_dashboard from "./assets/images/nav/Squares four 1.png";
import logo_project from "./assets/images/nav/Folder.png";
import logo_team from "./assets/images/nav/Groups.png";
import logo_message from "./assets/images/nav/Chat.png";
import logo_analytics from "./assets/images/nav/Pie chart.png";
import logo_integrations from "./assets/images/nav/Code.png";
import logo_group from "./assets/images/Group.png";
import logo_turnover from "./assets/images/overview/Button 1509.png";
import logo_profit from "./assets/images/overview/Button 1529.png";
import logo_newCus from "./assets/images/overview/Button 1530.png";
import logo_report from "./assets/images/table/File text 1.png";
import logo_import from "./assets/images/button/Download.png";
import logo_export from "./assets/images/button/Move up.png";
import logo_notification from "./assets/images/Bell 1.png";
import logo_question from "./assets/images/Question 1.png";
import logo_ava from "./assets/images/Avatar 313.png";
import Card from "./components/Card";
import { useEffect } from "react";
import { useState } from "react";
import { getOrders } from "./api/ordersApi";
import { columnsConfig } from "./data/ordersData";
import TableComponent from "./components/TableComponent";

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [turnover_value, setTurnover_value] = useState(0);
  const [profit_value, setProfit_value] = useState(0);
  const [newCus_value, setNewCus_value] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
        const turnover = data.reduce(
          (acc, data) => acc + parseFloat(data.orderValue),
          0
        );
        setTurnover_value(turnover.toFixed(2));
        setProfit_value((turnover * 0.6).toFixed(2));
        setNewCus_value((turnover * 0.4).toFixed(2));

        console.log("Orders:", data);
        console.log("Turnover:", turnover);
        console.log("Profit:", (turnover * 0.6).toFixed(2));
        console.log("New Customer:", (turnover * 0.4).toFixed(2));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="custom-container">
        <div className="header bg-white py-4 px-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-2xl text-pink-500 font-bold">Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all duration-200 hover:bg-gray-100"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <img
                  src={logo_notification}
                  alt="Notifications"
                  className="w-5 h-5"
                />
                <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src={logo_question} alt="Help" className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 cursor-pointer group">
                <img
                  src={logo_ava}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-pink-200 transition-all"
                />
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-pink-500 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="menu border-r-1 border-gray-100">LOGO & MENU</div>
        <div className="content">
          <h3 className="font-bold flex gap-2">
            <img src={logo_dashboard} alt="" />
            Overview
          </h3>
          <div className="flex gap-4 mt-3 justify-between">
            <Card
              logo={logo_turnover}
              color="bg-pink-50"
              title="Turnover"
              value={turnover_value}
              change="5.39"
            />
            <Card
              logo={logo_profit}
              color="bg-blue-50"
              title="Profit"
              value={profit_value}
              change="5.39"
            />
            <Card
              logo={logo_newCus}
              color="bg-blue-50"
              title="New customer"
              value={newCus_value}
              change="6.84"
            />
          </div>
        </div>
        <div className="table mt-6">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={logo_report} alt="" className="h-6" />
              <p className="font-bold whitespace-nowrap">Detailed report</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border-1 rounded-md border-pink-400 text-pink-400 bg-white cursor-pointer">
                <div className="flex gap-2">
                  <img src={logo_import} alt="" className="h-6" />
                  <span className="font-bold">Import</span>
                </div>
              </button>
              <button className="p-2 border-1 rounded-md border-pink-400 text-pink-400 bg-white cursor-pointer">
                <div className="flex gap-2">
                  <img src={logo_export} alt="" className="h-6" />
                  <span className="font-bold">Export</span>
                </div>
              </button>
            </div>
          </div>
          <TableComponent data={orders} columns={columnsConfig} />
        </div>
      </div>
    </>
  );
}

export default App;
