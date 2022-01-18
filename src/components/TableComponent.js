import { Table } from "antd";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import DropDown from "./DropDown";
import moment from "moment";
import DataService from "../service/DataService";
import "../App.css";
import { Link } from "react-router-dom";

function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    DataService.getData()
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  data.map((d) => {
    let date = moment(new Date(d.subscription_expiration));
    d.printableDate = date.format("MMM DD,YYYY");
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "buyer_name",
      ellipsis: true,
    },
    {
      title: "Sector",
      dataIndex: "project_sector_name",
      ellipsis: true,
    },
    {
      title: "Country",
      dataIndex: "country_name",
      ellipsis: true,
    },
    {
      title: "Expiry Date",
      dataIndex: "printableDate",
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "",
      width: 80,
      render: () => {
        return <DropDown />;
      },
      ellipsis: true,
    },
  ];

  return (
    <div className="tableDiv">
      <Table
        title={() => "Data Display"}
        columns={columns}
        bordered
        dataSource={data}
        pagination={false}
        onRow={(r) => ({
          onClick: () => {
            window.open(`/data/view/${r.id}`);
          },
        })}
      />
    </div>
  );
}

export default TableComponent;
