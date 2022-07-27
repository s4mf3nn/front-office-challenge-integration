import { FC } from 'react'
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { IPaginationButton } from '../../shared/interfaces/paginationButton.interface'

const PaginationButton: FC<IPaginationButton> = ({ type, handleClick, isDisabled }) => {
  if (type === "previous") {
    return (
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        onClick={handleClick}
        disabled={isDisabled}
      />
    )
  } else {
    return (
      <Button
        shape="circle"
        icon={<RightOutlined />}
        onClick={handleClick}
        disabled={isDisabled}
      />
    )
  }
}

export default PaginationButton