import cx from 'classnames';

import styles from './typography.module.css'

type ITypography = {
  children: React.ReactNode,
  customClassName?: string,
  variant: 'textXs' | 'textSm' | 'textBase' | 'textLg' | 'text3Xl' | 'text4Xl'
}

const Typography = ({children, customClassName, variant}: ITypography) => {
  return (
    <p className={cx(
      styles[`variant__${variant}`],
      customClassName,
    )}>
      {children}
    </p>
  )
}

export default Typography;