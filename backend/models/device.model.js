import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema({
    deviceID:{
        type: String,
        required: true,
    },
    isOnline:{
        type: Boolean,
        default: false,
    },
    lastUpdate:{
        type: Number,
        required: true,
        default: 0 
    },    
    waterLevel: {
    type: String, // percentage
    required: true,
    default: "Low"
  },
  flowRate: {
    type: Number, // liters per minute
    required: true,
    default: 0
  },
  totalConsumption: {
    type: Number, // liters
    required: true,
    default: 0
  },
  meterStatus: {
    type: String,
    enum: ["Normal", "Leak Detected", "Low Pressure"],
    default: "Normal",
  },
  billingStartDate: {
    type: Date,
    default: Date.now,
  }, 
    
});
const Device = mongoose.model('Device', DeviceSchema);

export default Device;