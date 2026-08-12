import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RecipesPage } from './pages/RecipesPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { AboutPage } from './pages/AboutPage';
import { I18nProvider, useI18n } from './i18n/I18nContext';

export default function App() {
  return (
    <I18nProvider defaultLocale='en'>
      <div className='font-sans bg-[var(--background)] min-h-screen flex flex-col'>
        <Nav />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/recipes/:id' element={<RecipeDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
