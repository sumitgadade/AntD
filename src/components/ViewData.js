import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataService from "../service/DataService";
import { Descriptions } from "antd";
import moment from "moment";

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
        console.log(response.data);
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
    <Descriptions title="Data" bordered>
      <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
      <Descriptions.Item label="Sector">{data.sector}</Descriptions.Item>
      <Descriptions.Item label="Country">{data.country}</Descriptions.Item>
      <Descriptions.Item label="Date">{data.date}</Descriptions.Item>
    </Descriptions>
  );
}
export default ViewData;
