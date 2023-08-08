import mongoose, { Schema } from "mongoose";
import schemaOptions from "../../consts/common.const";
import { OrderI, OrderStatus } from "./orders.interface";
const ObjectId = Schema.Types.ObjectId;

const orderSchema: Schema<OrderI> = new Schema({
    orderDate: { type: Date, required: true },
    contact: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    businessInformation: { type: String, required: true },
    deliverAddress: { type: String, required: true },
    containerType: { type: String, required: true },
    deliveryHours: { type: String, required: true },
    orderDuration: { type: String, required: true },
    orderPrice: { type: Number, required: true },
    instructions: { type: String, required: false },
    manualOrderNotes: { type: String, required: false },
    status: { type: String, required: true, enum: OrderStatus, default: OrderStatus.ACTIVE },
    createdBy: { type: ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
},
    {
        ...schemaOptions,
        timestamps: true
    },
);

const OrderModel = mongoose.model<OrderI>('Order', orderSchema);

export default OrderModel;