

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-background">
      
      <h2><span>&copy;{year} Team 2</span></h2>
    </footer>
  );
}
export default Footer;
