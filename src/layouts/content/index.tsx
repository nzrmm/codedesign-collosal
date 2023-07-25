import cx from 'classnames';

type IContent = {
  children: React.ReactNode,
}

const Content = ({children}: IContent) => {
  return (
    <div className={cx('antialiased bg-primary01/90 text-white min-h-screen')}>
      {children}
    </div>
  )
}

export default Content