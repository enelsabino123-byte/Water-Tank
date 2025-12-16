import express from 'express';

import { registerNewDevice, getDevices, deviceOnline, addUsage } from'../controllers/device.controller.js';

const router= express.Router();

router.post("/register", registerNewDevice);
router.get("/get", getDevices);
router.post("/online", deviceOnline);
router.post("/add-usage", addUsage);
export default router;