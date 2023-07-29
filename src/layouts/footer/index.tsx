import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import {
  Button,
  Typography,
} from '@/components';

import {footer} from '@/data/layout';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={cx('px-52 mb-16 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('circle-glass-effect', styles['circle-glass-effect-gradient01'])}></div>
      <div className={cx('circle-glass-effect', styles['circle-glass-effect-gradient02'])}></div>

      <div className={cx('flex items-center justify-between border-y border-white/10 py-12 mb-28')}>
        <Typography variant='text3Xl'>
          We&apos;ve prepared everything, it&apos;s time <br />
          for you to tell the problem
        </Typography>

        <div className={cx('flex items-center gap-[10px]')}>
          <Button
            id='send-quote-button'
            type='primary'
            variant='medium'
            onClick={() => {}}
          >
            Send Quote
          </Button>
          <Button
            id='ask-us-button'
            type='secondary'
            variant='medium'
            onClick={() => {}}
          >
            Ask Us
          </Button>
        </div>
      </div>

      <div className={cx('flex')}>
        <div className={cx('w-3/12')}>
          <div className={cx('flex items-center gap-5 mb-5')}>
            <Image
              width={23}
              height={22}
              src={'svgs/logo.svg'}
              alt='logo'
            />
            <span className={cx('text-white font-bold text-2xl')}>Collosal.</span>
          </div>

          <div>
            <Typography variant='textBase'>
              Copyright © 2021
            </Typography>
            <Typography variant='textBase'>
              Design By Collosal LLC
            </Typography>
          </div>
        </div>

        <div className={cx('w-3/12')}>
          <Typography variant='textSm' customClassName='!font-medium !text-white tracking-widest mb-5'>
            SERVICES
          </Typography>
          <div className={'flex flex-col gap-2'}>
            {footer.services.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <Typography variant='textBase'>
                    {item.label}
                  </Typography>
                </Link>
              )
            })}
          </div>
        </div>

        <div className={cx('w-3/12')}>
          <Typography variant='textSm' customClassName='!font-medium !text-white tracking-widest mb-5'>
            COMPANY
          </Typography>
          <div className={'flex flex-col gap-2'}>
            {footer.company.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <Typography variant='textBase'>
                    {item.label}
                  </Typography>
                </Link>
              )
            })}
          </div>
        </div>

        <div className={cx('w-3/12')}>
          <Typography variant='textSm' customClassName='!font-medium !text-white tracking-widest mb-5'>
            RESOURCES
          </Typography>
          <div className={'flex flex-col gap-2'}>
            {footer.resources.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <Typography variant='textBase'>
                    {item.label}
                  </Typography>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer