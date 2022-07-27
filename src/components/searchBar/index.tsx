import { nextEvent as sportCategories } from '../../data.json'
import { TSportCategory } from '../../shared/types/sportCategory.type'
import { Col, Row, Select } from 'antd';

const { Option } = Select

export default function SearchBar({ handleChange }: any) {
  // 001: Create options from sportCategories data
  const options = sportCategories.map((sport: TSportCategory) =>
    <Option key={sport.sportId} value={sport.sportId}>
      {sport.sportTitle}
    </Option>
  )

  return (
    <Row justify="center">
      <Col span={20}>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '100%',
          }}
          placeholder="Please select one or more sport category"
          onChange={handleChange}
        >
          {options}
        </Select>
      </Col>
    </Row>
  )
};