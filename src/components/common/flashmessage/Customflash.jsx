import React from 'react';
import FlashMessage from 'react-flash-message';
const Customflash = ({ msg, flag }) => {
	if (flag == 1) {
		return (
			<FlashMessage duration={3000}>
				<div class="alert alert-success">{msg}</div>
			</FlashMessage>
		);
	} else if (flag == 2) {
		return (
			<FlashMessage duration={3000}>
				<div class="alert alert-danger">{msg}</div>
			</FlashMessage>
		);
	}
};
export default Customflash;