const express = require("express")
const router = express.Router()

const patientController = require("../Controllers/patient")

router.post("/post", patientController.postPatient)
router.get("/getAllPatients", patientController.getAllPatient)
router.get("/get/:id", patientController.getPatientById)
router.get("/getStatus/:statusFind", patientController.getPatientByStatus)
router.put("/:id", patientController.updatePatient)
router.get("/:id/testDetails", patientController.getPatientTestDetails)
router.delete("/:id", patientController.deletePatient)

module.exports = router