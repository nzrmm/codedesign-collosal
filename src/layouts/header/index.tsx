import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';

import {Button} from '@/components';

import {links} from '@/data';

const Header = () => {
  const router = useRouter();

  return (
    <div className={cx('px-52 py-10')}>
      <div className={cx('flex items-center justify-between')}>
        {/* Logo */}
        <Link href={'/'}>
          <div className={cx('flex items-center gap-5')}>
            <Image width={23} height={22} src={'svgs/logo.svg'} alt='logo' />
            <span className={cx('text-white font-bold text-2xl')}>
              Collosal.
            </span>
          </div>
        </Link>

        {/* Navlink */}
        <div className={cx('flex items-center gap-12')}>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={cx('text-white/80', {
                  'font-bold !text-white': router.asPath === link.href,
                })}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Contact button */}
        <Button
          id='contact-button'
          type='secondary'
          variant='small'
          onClick={() => router.push('/contact')}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header;
