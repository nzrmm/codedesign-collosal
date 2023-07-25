import {useState} from 'react';
import cx from 'classnames';
import Link from 'next/link';

import {LogoIcon} from '@/assets/svgs';
import {Button} from '@/components';

const Header = () => {
  const [links] = useState([
    {href: '/services', label: 'Services'},
    {href: '/how-we-work', label: 'How We Work'},
    {href: '/projects', label: 'Projects'},
    {href: '/About', label: 'About'},
  ])
  
  return (
    <div className={cx('px-52 py-6')}>
      <div className={cx('flex items-center justify-between')}>
        {/* Logo */}
        <div className={cx('flex items-center gap-5')}>
          <LogoIcon />
          <span className={cx('text-white font-bold text-2xl')}>Collosal.</span>
        </div>

        {/* Navlink */}
        <div className={cx('flex items-center gap-12')}>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.href} className={cx('text-white/80')}>
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Contact button */}
        <Button
          id='contact-button'
          type='secondary'
          variant='small'
          onClick={() => {}}
        >
          Contact
        </Button>
      </div>
    </div>
  )
}

export default Header