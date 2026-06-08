import Card from '../components/Card';
import { phones } from '../data/phones';

const Products = () => {
  return (
    <div className="products-page container">
      <h1 className="section-title">Katalog Smartphone Flagship</h1>
      <p className="subtitle">Pilih smartphone impian Anda dan nikmati pengalaman premium hari ini.</p>
      
      <div className="grid">
        {phones.map(phone => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default Products;
