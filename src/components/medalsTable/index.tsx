import { medals } from '../../data.json'
import { Col, Row, Space, Table, Typography } from 'antd'
import { SortOrder } from 'antd/lib/table/interface'
import './style.css'

const { Title } = Typography

const MedalsTable = ({ selectSportIds }: any) => {
  const columns = [
  {
    dataIndex: 'country',
    key: 'country',
    title: 'Pays',
  },
  {
    dataIndex: 'gold',
    key: 'gold',
    title: 'Or',
    sorter: (a: any, b: any) => a.gold - b.gold,
  },
  {
    dataIndex: 'silver',
    key: 'silver',
    title: 'Argent',
    sorter: (a: any, b: any) => a.silver - b.silver,
  },
  {
    dataIndex: 'bronze',
    key: 'bronze',
    title: 'Bronze',
    sorter: (a: any, b: any) => a.bronze - b.bronze,
  },
  {
    dataIndex: 'total',
    key: 'total',
    title: 'Total',
    sorter: (a: any, b: any) => a.total - b.total,
    defaultSortOrder: 'descend' as SortOrder,
  },
  ]

  const dataSource = medals.map(country => {
    return {
      key: country.key,
      country: country.country,
      gold: country.medals.gold,
      silver: country.medals.silver,
      bronze: country.medals.bronze,
      total: Object.values(country.medals).reduce((acc: number, curr: number) => acc + curr)
    }
  })

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
}

export default MedalsTable