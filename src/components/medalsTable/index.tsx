import View from './view'
import { ColumnsType, SortOrder } from 'antd/lib/table/interface'
import { medals } from '../../data.json'
import { TTableColumns } from '../../shared/types/tableColumns.type'
import './style.css'


const MedalsTable = () => {
  // 001: Create table colums
  const columns: ColumnsType<TTableColumns[]> = [
  {
    dataIndex: 'country',
    key: 'country',
    title: 'Pays',
  },
  {
    dataIndex: 'gold',
    key: 'gold',
    title: 'Or',
    sorter: (rowA: any, rowB: any) => rowA.gold - rowB.gold,
  },
  {
    dataIndex: 'silver',
    key: 'silver',
    title: 'Argent',
    sorter: (rowA: any, rowB: any) => rowA.silver - rowB.silver,
  },
  {
    dataIndex: 'bronze',
    key: 'bronze',
    title: 'Bronze',
    sorter: (rowA: any, rowB: any) => rowA.bronze - rowB.bronze,
  },
  {
    dataIndex: 'total',
    key: 'total',
    title: 'Total',
    sorter: (rowA: any, rowB: any) => rowA.total - rowB.total,
    defaultSortOrder: 'descend' as SortOrder,
  },
  ]

  // 002: Create data source & add up all the medals of each country
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

  const params = { dataSource, columns }
  return <View {...params} />
}

export default MedalsTable