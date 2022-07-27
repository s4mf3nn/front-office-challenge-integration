import { MouseEventHandler } from "react";

export interface IPaginationButtonProps {
  type: 'previous' | 'next',
  handleClick: MouseEventHandler<HTMLElement>,
  isDisabled: boolean,
}