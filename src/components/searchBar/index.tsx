import { Col, Row, Select } from 'antd'
import { ISearchBarProps } from '../../shared/interfaces/searchBarProps.interface'
import { nextEvent as sportCategories } from '../../data.json'
import { TSportCategoryDateString } from '../../shared/types/sportCategory.type'
import './style.css'

const { Option } = Select

const SearchBar = ({ handleChange }: ISearchBarProps) => {
  // 001: Create options from sportCategories data
  const options = sportCategories.map((sport: TSportCategoryDateString) =>
    <Option key={sport.sportId} value={sport.sportId}>
      {sport.sportTitle}
    </Option>
  )

  return (
    <Row justify="center" className="spacer">
      <Col span={20}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select one or more sport category"
          onChange={handleChange}
        >
          {options}
        </Select>
      </Col>
    </Row>
  )
}

export default SearchBar