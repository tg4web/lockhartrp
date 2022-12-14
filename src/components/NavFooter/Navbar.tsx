import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  // Configuration for the navbar
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
        name: 'home',
        link: '/',
        icon: 'HomeIcon',
      },
      {
        name: 'discord',
        link: '/discord',
        icon: 'HomeIcon',
      },
      {
        name: 'forum',
        link: '/forum',
        icon: 'HomeIcon',
      },
      {
        name: 'login',
        link: '',
        icon: 'HomeIcon',
      },
      {
        name: 'register',
        link: '/register',
        icon: 'HomeIcon',
      },
    ],
  };

  return (
    <div className="pl-2 pr-2 flex justify-between items-center text-zinc-200 bg-slate-700">
      <div className="">
        <Link href={Configuration.Logo.link}>
          <Image
            src={Configuration.Logo.src}
            alt={Configuration.Logo.alt}
            width={Configuration.Logo.width}
            height={Configuration.Logo.height}
          />
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="pr-2 hover:underline">
            <Link href={Configuration.LinkData[0].link}>
              {Configuration.LinkData[0].name}
            </Link>
          </li>
          <li className="pr-2 hover:underline">
            <Link href={Configuration.LinkData[1].link}>
              {Configuration.LinkData[1].name}
            </Link>
          </li>
          <li className="pr-2 hover:underline">
            <Link href={Configuration.LinkData[2].link}>
              {Configuration.LinkData[2].name}
            </Link>
          </li>
          <li className="pr-2 hover:underline">
            <Link href={Configuration.LinkData[4].link}>
              {Configuration.LinkData[4].name}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li id="loginButton" className="hover:underline">
            <Link href={Configuration.LinkData[3].link}>
              {Configuration.LinkData[3].name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
