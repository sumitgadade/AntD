import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataService from "../service/DataService";
import moment from "moment";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "../App.css";

function ViewData() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");

  const data = { name, sector, country, date };

  useEffect(() => {
    DataService.getDatabyId(id)
      .then((response) => {
        setName(response.data.buyer_name);
        setSector(response.data.project_sector_name);
        setCountry(response.data.country_name);
        setDate(
          moment(new Date(response.data.subscription_expiration)).format(
            "MMM DD,YYYY"
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
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
          <h1>Data</h1>
          <div className="dataDisplay">
            <div className="dataItem">
              <div className="dataLable">Name :</div>
              <div classname="data">{data.name}</div>
              <div style={{ clear: "left" }}></div>
            </div>
            <div className="dataItem">
              <div className="dataLable">Sector :</div>
              <div classname="data">{data.sector}</div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className="dataItem">
              <div className="dataLable">Country :</div>
              <div classname="data">{data.country}</div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className="dataItem">
              <div className="dataLable">Expiry Date :</div>
              <div classname="data">{data.date}</div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2022 Created by Sumit Gadade
      </Footer>
    </Layout>
  );
}
export default ViewData;
