import { useParams, Link } from 'react-router-dom';
import { phones } from '../data/phones';
import { ShoppingBag, ChevronLeft, Shield } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const phone = phones.find(p => p.id === parseInt(id));

  if (!phone) {
    return (
      <div className="container not-found">
        <h2>Smartphone tidak ditemukan</h2>
        <Link to="/products" className="btn btn-primary">Kembali ke Katalog</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page container">
      <Link to="/products" className="back-link">
        <ChevronLeft size={20} /> Kembali ke Katalog
      </Link>
      
      <div className="detail-container">
        <div className="detail-image animate-fade-in">
          <img src={phone.image} alt={phone.name} />
        </div>
        
        <div className="detail-info animate-fade-in">
          <span className="badge">Flagship Device</span>
          <h1>{phone.name}</h1>
          <p className="detail-price">Rp {phone.price.toLocaleString('id-ID')} <span>/ hari</span></p>
          <div className="detail-stock">
            <span>Stok Tersedia:</span>
            <strong>{phone.stock} unit</strong>
          </div>
          
          <div className="detail-desc">
            <h3>Deskripsi</h3>
            <p>{phone.description}</p>
          </div>
          
          <div className="detail-terms">
            <Shield size={18} color="#0066cc" />
            <p><strong>Syarat:</strong> Wajib KTP / Identitas diri yang sah.</p>
          </div>
          
          <Link to="/booking" className="btn btn-primary btn-large btn-block">
            <ShoppingBag size={20} /> Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
