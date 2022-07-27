import { Col, Row, Table, Typography } from 'antd'
import './style.css';

const { Title } = Typography

const View = ({ dataSource, columns }: any) => {
  return (
    <Row justify="center" className="spacer">
      <Col span={20}>
        <Title level={4}>Médailles</Title>
        <Table
          className="table-spacer"
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          />
      </Col>
    </Row>
  )
};

export default View