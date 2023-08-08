import { OrderI } from "./orders.interface";
import OrderModel from "./orders.model";

const Controller = {

    createNewOrder: async (req: any, res: any) => {
        try {
            const order: OrderI = req.body;
            const [orderDuration, orderPrice] = order.orderDuration.split('-');
            order.orderPrice = parseInt(orderPrice);
            order.orderDuration = orderDuration;
            const newOrder = await OrderModel.create(order);
            res.status(201).json(newOrder);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    getAllOrders: async (req: any, res: any) => {
        try {
            const orders = await OrderModel.find().sort({ createdAt: -1 });
            res.status(200).json(orders);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    getTotalRevenue: async (req: any, res: any) => {
        try {
            const totalRevenue = await OrderModel.aggregate([
                {
                    $group: {
                        _id: null,
                        totalRevenue: { $sum: "$orderPrice" },
                    },
                },
            ]);
            res.status(200).json(totalRevenue);
        } catch (error: any) {
            console.log('error: ', error);
            res.status(500).json({ message: error.message });
        }
    },

    getDeliveryDetails: async (req: any, res: any) => {
        res.send([
            {
                deliverTo: "John Doe",
                distance: "22 km",
                deliveryTime: "Today 10:09pm",
                status: "Delivered",
                location: "New York",
            },
            {
                deliverTo: "John",
                distance: "29 km",
                deliveryTime: "Today 07:09pm",
                status: "Active",
                location: "Los Angeles",
            },
            {
                deliverTo: "John Doe",
                distance: "22 km",
                deliveryTime: "Today 10:09pm",
                status: "Dispatch",
                location: "Chicago",
            },
            {
                deliverTo: "John Doe",
                distance: "22 km",
                deliveryTime: "Today 10:09pm",
                status: "Cancelled",
                location: "Houston",
            },
            {
                deliverTo: "John Doe",
                distance: "22 km",
                deliveryTime: "Today 10:09pm",
                status: "Delivered",
                location: "New York",
            },
            {
                deliverTo: "John",
                distance: "29 km",
                deliveryTime: "Today 07:09pm",
                status: "Active",
                location: "Los Angeles",
            },
            {
                deliverTo: "John Doe",
                distance: "22 km",
                deliveryTime: "Today 10:09pm",
                status: "Dispatch",
                location: "Chicago",
            },
            {
                deliverTo: "John Doe",
                distance: "22 km",
                deliveryTime: "Today 10:09pm",
                status: "Cancelled",
                location: "Houston",
            },
        ]
        )
    },
}

export default Controller;