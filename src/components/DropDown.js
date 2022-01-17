import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import "antd/dist/antd.css";

function DropDown() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Button type="primary">View</Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button type="danger">Delete</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link">
        Option
        <DownOutlined />
      </a>
    </Dropdown>
  );
}

export default DropDown;
