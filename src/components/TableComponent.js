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
    if (e.target.value !== "") {
      console.log(e.target.value);
      const filterData = originalData.filter((entry) =>
        entry.buyer_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (!filterData.length) {
        setShowTable(false);
        setNotfound(true);
        setData([]);
      } else {
        setData(filterData);
        setShowTable(true);
        setNotfound(false);
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
      sorter: (record1, record2) => {
        return record1.buyer_name.localeCompare(record2.buyer_name);
      },
    },
    {
      title: "Sector",
      dataIndex: "project_sector_name",
      ellipsis: true,
      sorter: (record1, record2) => {
        return record1.project_sector_name.localeCompare(record2.project_sector_name);
      },
    },
    {
      title: "Country",
      dataIndex: "country_name",
      ellipsis: true,
      sorter: (record1, record2) => {
        return record1.country_name.localeCompare(record2.country_name);
      },
    },
    {
      title: "Expiry Date",
      dataIndex: "printableDate",
      ellipsis: true,
      sorter: (record1, record2) => {
        return record1.printableDate.localeCompare(record2.printableDate);
      },
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
                onBlur={handleSearch}
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
