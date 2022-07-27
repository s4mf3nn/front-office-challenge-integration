import { nextEvent as sportCategories } from '../../data.json'
import { INextEventsProps } from '../../shared/interfaces/nextEventProps.interface'
import { TSportCategoryDateNumber } from '../../shared/types/sportCategory.type'
import { useEffect, useState } from 'react'
import View from './view'
import './style.css'

const NextEvents = ({ selectedSportIds }: INextEventsProps) => {
  const maxCardPerPage: number = 3
  const [maxPage, setMaxPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [displayedCategories, setDisplayedCategories] = useState<TSportCategoryDateNumber[]>();

  // 001: Retrieve user's selected categories
  const selectedSportCategories: any = sportCategories.filter((category: any) => {
    return selectedSportIds.includes(category.sportId)
  })

  // 002: Display selected categories
  useEffect(() => {
    setMaxPage(Math.ceil(selectedSportCategories.length / 3))
    setDisplayedCategories(paginate(selectedSportCategories, maxCardPerPage, currentPage))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSportIds])

  //003:  Handled when user press previous or next button
  const handleClick = (type: 'previous' | 'next') => {
    let newCurrentPage: number

    if (type === 'previous') newCurrentPage = currentPage - 1
    else newCurrentPage = currentPage + 1

    setCurrentPage(newCurrentPage)
    setDisplayedCategories(paginate(selectedSportCategories, maxCardPerPage, newCurrentPage))
  }

  const params = { displayedCategories, handleClick, currentPage, maxPage }
  return <View {...params} />
}

export default NextEvents

// 004: Handle pagination
const paginate = (array: TSportCategoryDateNumber[], pageSize: number, currentPage: number) => {
  return array.slice((currentPage - 1) * pageSize, currentPage  * pageSize);
}