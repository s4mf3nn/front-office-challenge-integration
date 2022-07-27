import { TSportCategoryDateNumber } from '../../shared/types/sportCategory.type'
import { Col, Divider, Empty, Row, Space, Typography } from 'antd'
import SportCard from '../sportCard'
import PaginationButton from '../paginationButton'
import './style.css';

const { Title } = Typography

const style = {
  display: 'flex',
  justifyContent: 'center',
}

const View = ({ displayedCategories, handleClick, currentPage, maxPage }: any) => {
  return (
    <Space direction="vertical" size="large">
      <Row justify="center" className="spacer">
        <Col span={20}>
          <Title level={4}>Prochaines épreuves</Title>
        </Col>
      </Row>
      <Row gutter={16} justify="center" align="middle">
        {displayedCategories && displayedCategories.length === 0
          ? (
            <Empty description="Aucune épreuve de prévu" />
          ) : (
            <>
              <Col span={3} style={style}>
                <PaginationButton
                  type="previous"
                  handleClick={() => handleClick('previous')}
                  isDisabled={currentPage <= 1}
                  />
              </Col>
              <Space size="small">
                {displayedCategories && displayedCategories?.map((sportCategory: TSportCategoryDateNumber) =>
                  <Col span={14} key={sportCategory.id}>
                    <SportCard sportCategory={sportCategory} />
                  </Col>
                )}
              </Space>
              <Col span={3} style={style}>
                <PaginationButton
                  type="next"
                  handleClick={() => handleClick('next')}
                  isDisabled={maxPage <= 1 || currentPage === maxPage}
                  />
              </Col>
            </>
          )
        }
      </Row>
      <Row justify="center">
        <Col span={20}>
          <Divider/>
        </Col>
      </Row>
    </Space>
  )
}

export default View