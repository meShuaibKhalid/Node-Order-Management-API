import express from 'express';
import Controller from './orders.controller';
const router = express.Router();

router.get('/', Controller.getAllOrders);
router.post('/', Controller.createNewOrder);
router.get('/total-revenue', Controller.getTotalRevenue);
router.get('/delivery-details', Controller.getDeliveryDetails);

module.exports = router;
