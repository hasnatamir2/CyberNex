import React from "react";

const CartCheckout = ({ params }: { params: { cartId: string } }) => {
    const { cartId } = params;
    return <div>CartCheckout: {cartId}</div>;
};

export default CartCheckout;
