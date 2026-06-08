import { Link } from 'react-router-dom';
import { Eye, ShoppingBag } from 'lucide-react';

const Card = ({ phone }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={phone.image} alt={phone.name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{phone.name}</h3>
        <p className="card-price">Rp {phone.price.toLocaleString('id-ID')} <span>/ hari</span></p>
        <p className="card-stock">Stok: <strong>{phone.stock} unit</strong></p>
        
        <div className="card-actions">
          <Link to={`/product/${phone.id}`} className="btn btn-outline btn-small">
            <Eye size={18} /> Detail
          </Link>
          <Link to="/booking" className="btn btn-primary btn-small">
            <ShoppingBag size={18} /> Pesan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
