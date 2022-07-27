import { useState } from 'react'
import { Layout } from 'antd'
import Header from './components/header'
import SearchBar from './components/searchBar'
import NextEvents from './components/nextEvents'
import MedalsTable from './components/medalsTable'

function App() {
  const [selectedSportIds, setSelectedSportIds] = useState<any>([])

  // 001: Handle selected sportIds
  const handleChange = (value: string) => setSelectedSportIds(value)

  return (
    <Layout style={{ overflowX: 'hidden', height: '100vh' }}>
      <Header />
      <SearchBar handleChange={handleChange}  />
      <NextEvents selectedSportIds={selectedSportIds} />
      <MedalsTable/>
    </Layout>
  )
}

export default App
