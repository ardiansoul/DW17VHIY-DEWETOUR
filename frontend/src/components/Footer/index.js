import React from 'react';
import Leaf from '../../images/Leaf.svg';

import './footer.css'

function Footer() {
	return(
		<footer className="footer d-flex align-items-end">
			<p>Copyright @ 2020 Dewe Tour - Ardiyana Saputra - NIS. All Rights reserved</p>
			<img src={Leaf} alt="Leaf"/>
		</footer>
		)
}

export default Footer;