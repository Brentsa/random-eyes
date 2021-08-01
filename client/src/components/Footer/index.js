

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-background">
      
      <h2><span>&copy;{year} Sean, Peter, Danyal, Swan </span></h2>
    </footer>
  );
}
export default Footer;
