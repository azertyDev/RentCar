import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { deleteUserMidd} from "../../Redux/Middleware/adminCars";
import { modalShow, drawShow, showDataFunc, addDataFunc } from "../../Redux/Action/adminCars";
import ModalComponent from "../../Components/Modal/modal";
const TableComponent = props => {
  const columns = [
    {
      title: "CarId",
      dataIndex: "carId"
    },
    {
      title: "Model",
      dataIndex: "model"
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title:"Action",
      dataIndex:"action",
      render:function(){
        return(
          <span>
              <Button>Delete</Button>
          </span>
        )
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.data}
        size="middle"
      />
    </div>
  );
};

const mapStateToProps = ({ cars }) => {
  return {
    cars
  };
};


export default TableComponent;
