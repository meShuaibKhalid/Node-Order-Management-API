import { Schema } from "mongoose";
export enum OrderStatus {
    CANCELLED = "Cancelled",
    ACTIVE = "Active",
    DISPATCH = "Dispatch",
    DELIVERED = "Delivered",
}

export interface OrderI {
    _id?: string | Schema.Types.ObjectId;
    orderDate: Date | string;
    contact: string;
    paymentMethod: string;
    businessInformation: string;
    deliverAddress: string;
    containerType: string;
    deliveryHours: string;
    orderDuration: string;
    orderPrice: number;
    instructions: string;
    manualOrderNotes: string;
    status: OrderStatus;
    createdBy: Schema.Types.ObjectId;
    createdAt?: Date;
    updatedBy: Schema.Types.ObjectId;
    updatedAt?: Date;
}