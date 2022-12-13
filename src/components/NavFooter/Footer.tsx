import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  // Configuration for the footer
  const Configuration = {
    Logo: {
      src: '/LockhartRP.png',
      link: '/',
      alt: 'Logo',
      width: 50!,
      height: 50!,
    },
    LinkData: [
      {
        name: 'To be added',
        link: '',
        icon: '',
      },
    ],
    Copyright: {
      msg: ['Copyright', '©', 'LockhartRP', new Date().getFullYear() + '.'].join(' '),
    }
  };

  return (
    <div className="pl-2 pr-2 w-full flex justify-center items-center text-zinc-200 bg-slate-700">
      <div className="pr-1">
        <Link href={Configuration.Logo.link}>
          <Image
            src={Configuration.Logo.src}
            alt={Configuration.Logo.alt}
            width={Configuration.Logo.width}
            height={Configuration.Logo.height}
          />
        </Link>
      </div>
      <div className='pl-1'>
        <ul className="flex">
          <li className="pr-2 hover:underline">
            <p>{Configuration.Copyright.msg}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
