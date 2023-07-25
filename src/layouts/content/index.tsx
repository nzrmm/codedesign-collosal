import cx from 'classnames';

import {Header} from '@/layouts'

type IContent = {
  children: React.ReactNode,
}

const Content = ({children}: IContent) => {
  return (
    <div className={cx('antialiased bg-primary01/90 text-white min-h-screen')}>
      <Header />
      {children}
    </div>
  )
}

export default Content