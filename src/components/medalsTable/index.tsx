import { medals } from '../../data.json'
import { TTableColumns } from '../../shared/types/tableColumns.type'
import { ColumnsType, SortOrder } from 'antd/lib/table/interface'
import View from './view'
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