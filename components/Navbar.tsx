import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" href="/"><i className="flaticon-car-repair-1"></i> Garage Maison-Blanche</Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><Link href="/station">La Station</Link></li>
            <li><Link href="/garage">L'Atelier</Link></li>
            <li><Link href="/shop">Le Shop</Link></li>
            <li><Link href="/lavage">Le Lavage</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
