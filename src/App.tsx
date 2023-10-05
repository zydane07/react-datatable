import { useEffect, useState } from "react";
import { Payment, columns } from "./components/Columns";
import Datatable from "./components/Datatable";

const getData = async (): Promise<Payment[]> => {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "x@example.com",
    },
  ];
};

const App: React.FC = () => {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentData = await getData();
        setData(paymentData);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <Datatable columns={columns} data={data} />
    </div>
  );
};

export default App;
