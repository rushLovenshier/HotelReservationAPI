const express = require('express');
const RegistrationController = require('../controller/RegistrationsController');

const router = express.Router();

router.post("/saveRegistration", RegistrationController.saveRegistration);
router.put("/updateRegistration", RegistrationController.updateRegistration);
router.delete("/deleteRegistration", RegistrationController.deleteRegistration);
router.get("/searchRegistration", RegistrationController.searchRegistration);
router.get("/getAllRegistrations", RegistrationController.getAllRegistrations);

module.exports = router;