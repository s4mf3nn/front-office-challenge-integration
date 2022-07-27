import { useState } from 'react'
import Header from './components/header';
import SearchBar from './components/searchBar'
import NextEvents from './components/nextEvents'
import { Layout } from 'antd';

function App() {
  const [selectSportIds, setSelectedSportIds] = useState<any>([])

  // 001: Handle selected sportId
  const handleChange = (value: string) => setSelectedSportIds(value)
  return (
    <Layout style={{ overflowX: 'hidden', height: '100vh' }}>
      <Header />
      <SearchBar handleChange={handleChange}  />
      <NextEvents selectSportIds={selectSportIds} />
    </Layout>
  )
}

export default App
