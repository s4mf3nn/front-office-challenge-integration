import { IPaginationButtonProps } from '../../shared/interfaces/paginationButtonProps.interface'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const PaginationButton = ({ type, handleClick, isDisabled }: IPaginationButtonProps) => {
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