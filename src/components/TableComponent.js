import { Input, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import DropDown from "./DropDown";
import moment from "moment";
import DataService from "../service/DataService";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "../App.css";

const { Title } = Typography;

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
    <Layout>
      <Header>
        <div className="logo" />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-content"
          style={{ padding: 24, minHeight: 470 }}
        >
          <Table
            title={() => "Data Display"}
            columns={columns}
            bordered
            dataSource={data}
            pagination={false}
            onRow={(r) => ({
              onClick: () => {
                window.open(`/data/view/${r.id}`, "_parent");
              },
            })}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2022 Created by Sumit Gadade
      </Footer>
    </Layout>
  );
}

export default TableComponent;
