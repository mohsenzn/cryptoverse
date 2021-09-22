import React, { useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import icon from "../images/cryptocurrency.png";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size="large" src={icon} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} className="py-3">
            <Link to="/" className="link">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} className="py-3">
            <Link to="/cryptocurrencies" className="link">
              Cryptocurrencies
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} className="py-3">
            <Link to="/exchanges" className="link">
              Exchanges
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} className="py-3">
            <Link to="/news" className="link">
              News
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
