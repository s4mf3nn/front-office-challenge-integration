import { useEffect, useState } from 'react'
import { nextEvent as sportCategories } from '../../data.json'
import { TSportCategory } from '../../shared/types/sportCategory.type'
import { Col, Empty, Row, Space, Typography } from 'antd';
import SportCard from '../sportCard'
import PaginationButton from '../paginationButton'
import './style.css'

const { Title } = Typography

const style = {
  display: 'flex',
  justifyContent: 'center',
}
export default function NextEvents({ selectSportIds }: any) {
  const maxCardPerPage: number = 3
  const [maxPage, setMaxPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [displayedCategories, setDisplayedCategories] = useState<TSportCategory[]>();

  // 001: Retrieve user's selected categories
  const selectedSportCategories = sportCategories.filter((category: TSportCategory) => {
    return selectSportIds.includes(category.sportId)
  })

  // 002: Display selected categories
  useEffect(() => {
    setMaxPage(Math.ceil(selectedSportCategories.length / 3))
    setDisplayedCategories(paginate(selectedSportCategories, maxCardPerPage, currentPage))
  }, [selectSportIds])

  //003:  Handled when user press previous or next button
  const handleClick = (type: 'previous' | 'next') => {
    let newCurrentPage: number

    if (type === 'previous') newCurrentPage = currentPage - 1
    else newCurrentPage = currentPage + 1

    setCurrentPage(newCurrentPage)
    setDisplayedCategories(paginate(selectedSportCategories, maxCardPerPage, newCurrentPage))
  }

  return (
    <Space direction="vertical" size="large">
      <Row justify="center">
        <Col span={20}>
          <Title level={3}>Prochaines épreuves</Title>
        </Col>
      </Row>
      <Row gutter={16} justify="center" align="middle">
        {displayedCategories && displayedCategories.length === 0
          ? (
            <>
              <Empty description="Aucune épreuve de prévu" />
            </>
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
                {displayedCategories && displayedCategories.map(sportCategory =>
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
    </Space>
  )
}

// 003: Handle pagination
const paginate = (array: TSportCategory[], pageSize: number, currentPage: number) => {
  return array.slice((currentPage - 1) * pageSize, currentPage  * pageSize);
}