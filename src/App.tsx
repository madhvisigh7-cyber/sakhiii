import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShopByCategory } from './components/ShopByCategory';
import { NewArrivals } from './components/NewArrivals';
import { BestSellers } from './components/BestSellers';
import { SpecialCollection } from './components/SpecialCollection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FestiveCollection } from './components/FestiveCollection';
import { InstagramSection } from './components/InstagramSection';
import { CustomerReviews } from './components/CustomerReviews';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ShopPage } from './components/ShopPage';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Product } from './types';

const MainAppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [shopCategoryFilter, setShopCategoryFilter] = useState<string>('All');

  const {
    quickViewProduct,
    setQuickViewProduct,
    activeProductDetail,
    setActiveProductDetail,
    toastMessage,
  } = useCart();

  const handleNavigate = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromHome = (categoryName: string) => {
    setShopCategoryFilter(categoryName);
    setCurrentTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductDetail = (product: Product) => {
    setActiveProductDetail(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1617] pb-16 lg:pb-0">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 bg-[#68132B] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#D4AF37]/40 flex items-center gap-3 animate-bounce">
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Sticky Navigation */}
      <Navbar currentTab={currentTab} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            <Hero
              onShopClick={() => handleNavigate('shop')}
              onExploreCollection={() => {
                const el = document.getElementById('sakhi-collection-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNavigate('collections');
              }}
            />

            <ShopByCategory onSelectCategory={handleSelectCategoryFromHome} />

            <NewArrivals
              onOpenDetail={handleOpenProductDetail}
              onViewAll={() => handleNavigate('shop')}
            />

            <BestSellers
              onOpenDetail={handleOpenProductDetail}
              onViewAll={() => handleNavigate('shop')}
            />

            <div id="sakhi-collection-section">
              <SpecialCollection onSelectCategory={handleSelectCategoryFromHome} />
            </div>

            <WhyChooseUs />

            <FestiveCollection
              onShopFestive={() => handleSelectCategoryFromHome('Ethnic Jewellery')}
            />

            <InstagramSection />

            <CustomerReviews />

            <AboutSection />

            <ContactSection />
          </>
        )}

        {currentTab === 'shop' && (
          <ShopPage
            initialCategory={shopCategoryFilter}
            onOpenDetail={handleOpenProductDetail}
          />
        )}

        {currentTab === 'collections' && (
          <div className="pt-6">
            <SpecialCollection onSelectCategory={handleSelectCategoryFromHome} />
            <ShopByCategory onSelectCategory={handleSelectCategoryFromHome} />
            <FestiveCollection
              onShopFestive={() => handleSelectCategoryFromHome('Ethnic Jewellery')}
            />
          </div>
        )}

        {currentTab === 'new-arrivals' && (
          <div className="pt-6">
            <NewArrivals
              onOpenDetail={handleOpenProductDetail}
              onViewAll={() => handleNavigate('shop')}
            />
          </div>
        )}

        {currentTab === 'best-sellers' && (
          <div className="pt-6">
            <BestSellers
              onOpenDetail={handleOpenProductDetail}
              onViewAll={() => handleNavigate('shop')}
            />
          </div>
        )}

        {currentTab === 'about' && (
          <div className="pt-6">
            <AboutSection />
            <WhyChooseUs />
            <CustomerReviews />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="pt-6">
            <ContactSection />
            <InstagramSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar currentTab={currentTab} onNavigate={handleNavigate} />

      {/* Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal onOpenProduct={handleOpenProductDetail} />
      <CheckoutModal />

      {/* Quick View / Full Detail Modal */}
      {(quickViewProduct || activeProductDetail) && (
        <ProductDetailModal
          product={(quickViewProduct || activeProductDetail)!}
          onClose={() => {
            setQuickViewProduct(null);
            setActiveProductDetail(null);
          }}
          onOpenProduct={(newProd) => {
            setQuickViewProduct(null);
            setActiveProductDetail(newProd);
          }}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
