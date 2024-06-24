import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Developed by Ankit</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
