import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Zap, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <h1>Sewa Smartphone Flagship Premium</h1>
            <p>Nikmati teknologi terbaru tanpa harus membeli. Coba Samsung Galaxy S26 Ultra atau Z Fold 7 sekarang juga!</p>
            <div className="hero-btns">
              <Link to="/products" className="btn btn-primary btn-large">
                Sewa Sekarang <ChevronRight size={20} />
              </Link>
              <Link to="/products" className="btn btn-outline btn-large">
                Lihat Katalog
              </Link>
            </div>
          </div>
          <div className="hero-image animate-fade-in">
            <img src="/S26.png" alt="Hero Phone" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="feature-item">
          <ShieldCheck size={40} color="#0066cc" />
          <h3>Original & Terawat</h3>
          <p>Semua unit kami adalah unit original dengan kondisi fisik 99% mulus.</p>
        </div>
        <div className="feature-item">
          <Zap size={40} color="#0066cc" />
          <h3>Proses Cepat</h3>
          <p>Pesan hari ini, unit langsung dikirim atau bisa diambil di toko kami.</p>
        </div>
        <div className="feature-item">
          <Award size={40} color="#0066cc" />
          <h3>Harga Kompetitif</h3>
          <p>Nikmati harga sewa termurah untuk smartphone flagship terbaru.</p>
        </div>
      </section>

      {/* Terms Section */}
      <section className="terms-highlight">
        <div className="container">
          <div className="terms-card">
            <h2>Syarat Sewa Sangat Mudah</h2>
            <p>Cukup dengan melampirkan <strong>KTP / Identitas diri</strong> yang sah, Anda sudah bisa membawa pulang smartphone impian.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
