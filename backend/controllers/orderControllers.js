import getRawBody from "raw-body";
import Order from "../models/order";
import APIFilters from "../utils/APIFilters";
import ErrorHandler from "../utils/errorHandler";

export const getOrders = async (req, res) => {
    const resPerPage = 2;
    const ordersCount = await Order.countDocuments();

    const apiFilters = new APIFilters(Order.find(), req.query).pagination(
        resPerPage
    );

    const orders = await apiFilters.query.find().populate("shippingInfo user");

    res.status(200).json({
        ordersCount,
        resPerPage,
        orders,
    });
};

export const getOrder = async (req, res) => {
    const order = await Order.findById(req.query.id).populate(
        "shippingInfo user"
    );

    if (!order) {
        return next(new ErrorHandler("No Order found with this ID", 404));
    }

    res.status(200).json({
        order,
    });
};

export const myOrders = async (req, res) => {
    const resPerPage = 2;
    const ordersCount = await Order.countDocuments();

    const apiFilters = new APIFilters(Order.find(), req.query).pagination(
        resPerPage
    );

    const orders = await apiFilters.query
        .find({ user: req.user._id })
        .populate("shippingInfo user");

    res.status(200).json({
        ordersCount,
        resPerPage,
        orders,
    });
};

export const updateOrder = async (req, res) => {
    let order = await Order.findById(req.query.id);

    if (!order) {
        return next(new ErrorHandler("No Order found with this ID", 404));
    }

    order = await Order.findByIdAndUpdate(req.query.id, {
        orderStatus: req.body.orderStatus,
    });

    res.status(200).json({
        success: true,
        order,
    });
};

export const deleteOrder = async (req, res) => {
    let order = await Order.findById(req.query.id);

    if (!order) {
        return next(new ErrorHandler("No Order found with this ID", 404));
    }

    await order.deleteOne();

    res.status(200).json({
        success: true,
    });
};

export const canReview = async (req, res) => {
    const productId = req.query.productId;

    const orders = await Order.find({
        user: req?.user?._id,
        "orderItems.product": productId,
    });

    let canReview = orders?.length >= 1 ? true : false;

    res.status(200).json({
        canReview,
    });
};

async function getCartItems(line_items) {
    return new Promise((resolve, reject) => {
        // TODO: Integrate payment gateway and get the cart items
        resolve(true);
    });
}

export const webhook = async (req, res) => {
    const orderItems = await getCartItems(line_items);
    const userId = session.client_reference_id;
    const amountPaid = session.amount_total / 100;

    const paymentInfo = {
        id: session.payment_intent,
        status: session.payment_status,
        amountPaid,
        taxPaid: session.total_details.amount_tax / 100,
    };

    const orderData = {
        user: userId,
        shippingInfo: session.metadata.shippingInfo,
        paymentInfo,
        orderItems,
    };

    const order = await Order.create(orderData);
    res.status(201).json({ success: true });
};
