import { useState } from "react";

const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ errorState, setErrorState ] = useState('');

  return (
    <div>
      Header TBD
    </div>
  )
};

export default Header;
