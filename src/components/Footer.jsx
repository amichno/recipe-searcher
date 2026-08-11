import InstaIcon from '../components/icons/icon-instagram.svg';
import TweeterIcon from '../components/icons/icon-bluesky.svg';
import TikTokIcon from '../components/icons/icon-tiktok.svg';

export function Footer() {
  return (
    <footer className='flex items-center justify-between px-10 py-6 border-t border-stone-200 text-xs text-stone-500'>
      <span>Made with ❤️ and 🥑</span>
      <span className='inline-flex items-center gap-4'>
        <img src={InstaIcon} />
        <img src={TweeterIcon} />
        <img src={TikTokIcon} />
      </span>
    </footer>
  );
}
