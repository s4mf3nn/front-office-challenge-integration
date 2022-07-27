import { FC } from 'react'
import moment from 'moment'
import Card from 'antd/lib/card'
import './style.css'

const { Meta } = Card

const SportCard: FC<any> = ({ sportCategory }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={sportCategory.pictureUrl} />}
    >
      <Meta
        title={sportCategory.sportTitle}
        description={moment.unix(sportCategory.date).format('DD/MM/YYYY - HH:mm')}
      />
    </Card>
  )
};

export default SportCard