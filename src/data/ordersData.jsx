export const ordersData = [
  {
    id: 1,
    customerName: "Elizabeth Lee",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    company: "AvatarSystems",
    orderValue: 359,
    orderDate: "10/07/2023",
    status: "New",
  },
  {
    id: 2,
    customerName: "Carlos Garcia",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    company: "SmoozeShift",
    orderValue: 747,
    orderDate: "24/07/2023",
    status: "New",
  },
  {
    id: 3,
    customerName: "Elizabeth Bailey",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    company: "Prime Time Telecom",
    orderValue: 564,
    orderDate: "08/08/2023",
    status: "In-progress",
  },
  {
    id: 4,
    customerName: "Ryan Brown",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    company: "OmniTech Corporation",
    orderValue: 541,
    orderDate: "31/08/2023",
    status: "In-progress",
  },
  {
    id: 5,
    customerName: "Ryan Young",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    company: "DataStream Inc.",
    orderValue: 769,
    orderDate: "01/05/2023",
    status: "Completed",
  },
  {
    id: 6,
    customerName: "Hailey Adams",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    company: "FlowRush",
    orderValue: 922,
    orderDate: "10/06/2023",
    status: "Completed",
  },
];

export const columnsConfig = [
  {
    Header: "CUSTOMER NAME",
    accessor: "customerName",
    Cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={row.original.avatar} alt="Avatar" className="avatar" />
        <span style={{ marginLeft: "10px" }}>{row.original.customerName}</span>
      </div>
    ),
  },
  { Header: "COMPANY", accessor: "company" },
  {
    Header: "ORDER VALUE",
    accessor: "orderValue",
    Cell: ({ value }) => `$${value.toLocaleString()}`,
  },
  { Header: "ORDER DATE", accessor: "orderDate" },
  {
    Header: "STATUS",
    accessor: "status",
    Cell: ({ value }) => {
      let statusClass = "";
      if (value === "New") statusClass = "status-new";
      else if (value === "In-progress") statusClass = "status-inprogress";
      else if (value === "Completed") statusClass = "status-completed";
      return <span className={`status-label ${statusClass}`}>{value}</span>;
    },
  },
];
