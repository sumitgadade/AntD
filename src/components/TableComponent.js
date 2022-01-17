import { Table, DatePicker } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import DropDown from "./DropDown";
import moment from "moment";

function TableComponent() {
  const dateFormat = "MM/DD/YYYY";
  const data = [
    {
      id: "563dd99d-b192-4b1a-9eca-66cbc4edefb3",
      project_sector_name: "Retail & wholesale trade; vehicle repair",
      buyer_name: "Chevron",
      country_name: "Aland Islands",
      secondary_country_list: [],
      subscription_type_list: [
        {
          id: 1,
          name: "Reporting",
        },
        {
          id: 2,
          name: "Registration",
        },
      ],
      create_date: "2022-01-06T12:33:48.440231Z",
      write_date: "2022-01-06T12:33:48.440248Z",
      deleted: null,
      name: "amazon",
      description: "ecom",
      status: "active",
      is_paid: true,
      subscription_expiration: "2022-01-07T06:23:24Z",
      created_by: null,
      updated_by: 1,
      buyer: 1,
      country: 1,
      project_sector: 21,
      secondary_country: [],
      subscription_type: [1, 2],
    },
    {
      id: "708c4a2e-85c7-4dcc-9546-ce7d0cd98843",
      project_sector_name: "Manufacturing",
      buyer_name: "Chevron",
      country_name: "Aland Islands",
      secondary_country_list: [
        {
          id: 2,
          country_name: "Bouvet Island",
        },
        {
          id: 3,
          country_name: "Christmas Island",
        },
        {
          id: 4,
          country_name: "Cook Islands",
        },
      ],
      subscription_type_list: [
        {
          id: 1,
          name: "Reporting",
        },
      ],
      create_date: "2022-01-05T16:55:25.537167Z",
      write_date: "2022-01-05T16:55:25.537226Z",
      deleted: null,
      name: "TEPu",
      description: "",
      status: "active",
      is_paid: true,
      subscription_expiration: "2022-01-05T16:54:49Z",
      created_by: 1,
      updated_by: 1,
      buyer: 1,
      country: 1,
      project_sector: 13,
      secondary_country: [2, 3, 4],
      subscription_type: [1],
    },
    {
      id: "958ee389-cd93-464d-8bdc-63ce7723ed79",
      project_sector_name: "Manufacturing",
      buyer_name: "Jubliee Field",
      country_name: "Bouvet Island",
      secondary_country_list: [
        {
          id: 1,
          country_name: "Aland Islands",
        },
        {
          id: 5,
          country_name: "Bhutan",
        },
        {
          id: 2,
          country_name: "Bouvet Island",
        },
        {
          id: 3,
          country_name: "Christmas Island",
        },
        {
          id: 4,
          country_name: "Cook Islands",
        },
      ],
      subscription_type_list: [
        {
          id: 1,
          name: "Reporting",
        },
      ],
      create_date: "2022-01-11T12:01:52.091680Z",
      write_date: "2022-01-11T12:01:52.091725Z",
      deleted: null,
      name: "Domunli",
      description:
        "Domunli Gas Processing Project is the company that oversees the activities of gas processing in Domunli in the Western Region of Company. It is a Government of Ghana company under the Ministry of Energy of Ghana.",
      status: "active",
      is_paid: true,
      subscription_expiration: "2022-01-11T11:57:30Z",
      created_by: 1,
      updated_by: 1,
      buyer: 9,
      country: 2,
      project_sector: 13,
      secondary_country: [1, 5, 2, 3, 4],
      subscription_type: [1],
    },
    {
      id: "b9a1dd86-9450-49b1-9eaf-dea32f7abc95",
      project_sector_name: "Electricity, gas, air, steam supply",
      buyer_name: "Exxon Mobil",
      country_name: "Christmas Island",
      secondary_country_list: [
        {
          id: 2,
          country_name: "Bouvet Island",
        },
        {
          id: 3,
          country_name: "Christmas Island",
        },
        {
          id: 4,
          country_name: "Cook Islands",
        },
      ],
      subscription_type_list: [
        {
          id: 1,
          name: "Reporting",
        },
      ],
      create_date: "2022-01-05T16:56:20.624839Z",
      write_date: "2022-01-05T16:56:20.624875Z",
      deleted: null,
      name: "Exxon Mobile Alliz",
      description: "",
      status: "active",
      is_paid: true,
      subscription_expiration: "2022-01-05T16:55:40Z",
      created_by: 1,
      updated_by: 1,
      buyer: 2,
      country: 3,
      project_sector: 9,
      secondary_country: [2, 3, 4],
      subscription_type: [1],
    },
    {
      id: "eec47767-76a9-4ace-bf29-eb87f64abe17",
      project_sector_name: "Real estate",
      buyer_name: "Chevron",
      country_name: "Anguilla",
      secondary_country_list: [],
      subscription_type_list: [
        {
          id: 1,
          name: "Reporting",
        },
        {
          id: 2,
          name: "Registration",
        },
      ],
      create_date: "2022-01-14T07:35:04.940005Z",
      write_date: "2022-01-14T07:35:04.940038Z",
      deleted: null,
      name: "New Project",
      description: "project for demo",
      status: "active",
      is_paid: true,
      subscription_expiration: "2022-01-15T07:38:37.465000Z",
      created_by: null,
      updated_by: null,
      buyer: 1,
      country: 6,
      project_sector: 18,
      secondary_country: [],
      subscription_type: [1, 2],
    },
  ];

  data.map((d) => {
    let date = moment(new Date(d.subscription_expiration));
    d.printableDate = date.format("MM/DD/YYYY");
  });

  const columns = [
    {
      title: "buyer_name",
      dataIndex: "buyer_name",
    },
    {
      title: "project_sector_name",
      dataIndex: "project_sector_name",
    },
    {
      title: "country_name",
      dataIndex: "country_name",
    },
    {
      title: "Subscription_expiration",
      dataIndex: "printableDate",
    },
    {
      title: "Option",
      dataIndex: "",
      render: () => {
        return <DropDown />;
      },
    },
  ];

  return (
    <div className="tableDiv">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default TableComponent;
