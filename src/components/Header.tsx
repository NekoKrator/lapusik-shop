import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='border-b bg-white sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            Лапусик
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link to='/catalog'>Каталог</Link>
            <Link to='/about'>Про нас</Link>
            <Link to='/delivery'>Доставка</Link>
            <Link to='/contacts'>Контакти</Link>
          </nav>

          <div className='flex items-center space-x-4'>
            <Button variant='ghost'>LIKE</Button>
            <Button variant='ghost'>CART</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
