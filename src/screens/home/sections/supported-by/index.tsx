import {useState} from 'react';
import cx from 'classnames';
import Image from 'next/image';

const SupportedBy = () => {
  const [logos] = useState([
    {src: '/images/github-logo.png', alt: 'github-logo'},
    {src: '/images/forbes-logo.png', alt: 'forbes-logo'},
    {src: '/images/google-logo.png', alt: 'google-logo'},
    {src: '/images/microsoft-logo.png', alt: 'microsoft-logo'},
    {src: '/images/facebook-logo.png', alt: 'facebook-logo'},
  ])

  return (
    <div className={cx('px-52 mb-28')}>
      <div className={cx('flex items-center justify-center gap-11 border-y border-white/10 py-8')}>
        {logos.map((logo, index) => {
          return (
            <Image
              key={index}
              src={logo.src}
              width={120}
              height={32}
              alt={logo.alt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SupportedBy