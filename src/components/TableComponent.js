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
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [timer, setTimer] = useState(null);
  const [showTable, setShowTable] = useState(true);
  const [notFound, setNotfound] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    DataService.getData()
      .then((response) => {
        setOriginalData(response.data.results);
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      searchFunction(e.target.value);
    }, 1000);
    setTimer(newTimer);
  };

  const searchFunction = (val) => {
    if (val !== "") {
      console.log(val);
      const filterData = originalData.filter((entry) =>
        entry.buyer_name.toLowerCase().includes(val.toLowerCase())
      );
      if (!filterData.length) {
        setShowTable(false);
        setNotfound(true);
        setData([]);
      } else {
        setData(filterData);
      }
    } else {
      setShowTable(true);
      setNotfound(false);
      setData(originalData);
    }
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
          <div className="searchDiv">
            <Title level={4}>
              Search :
              <Input
                placeholder="input serch text"
                style={{ width: 250, margin: 20 }}
                onChange={handleSearch}
              />
            </Title>
          </div>
          <div>
            {showTable ? (
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
            ) : null}
          </div>
          {notFound ? <div className="notFound">Record Not Found</div> : null}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2022 Created by Sumit Gadade
      </Footer>
    </Layout>
  );
}

export default TableComponent;
