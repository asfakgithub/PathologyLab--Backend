const Patient = require("../Models/patientModels")
const Test = require("../Models/testModels")

exports.postPatient = async (req, res) => {
    try {
        const body = req.body;
        // console.log(body)
        const newUser = await Patient.create(body)

        if (newUser) {
            res.status(200).json({
                data: newUser,
                "message": "Patient Added Successfully"
            })
        } else {
            res.json({
                "error": "Some Technical Issue",
                "message": "Fail is Patient Posting"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err,
            status: "error",
            "message": "Technical Fault"
        })
    }
}


exports.getPatientById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const isUser = await Patient.findById(id);
        if (isUser) {
            res.status(200).json({
                data: isUser,
                "message": "Patient Id Successfully"
            })
        } else {
            res.status.json({
                message: "No such Patient Exist"
            })
        }

    } catch (err) {
        res.status(500).json({
            error: err,
            status: "error",
            "message": "Technical Fault"
        })
    }
}

exports.getPatientByStatus = async (req, res) => {
    try {
        const { statusFind } = req.params;
        console.log(statusFind)
        const isData = await Patient.find({ status: statusFind })
        res.status(200).json({
            message: "Fetched Success",
            data: isData
        })
    } catch (err) {
        res.status(404).json({
            error: err,
            status: "Fail",
            "message": "Technical Fault"
        })
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;

        const updatedPatient = await Patient.updateOne({ _id: id }, body);
        if (updatedPatient) {
            res.status(200).json({
                message: "update Successfully",
                data: updatedPatient
            })
        }
    } catch (error) {
        res.status(404).json({
            error: err,
            status: "Fail",
            "message": "Technical Fault"
        })
    }
}

exports.getPatientTestDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const isPatientData = await Patient.findById(id);
        // console.log(isPatientData)
        if (isPatientData) {
            const testDetail = await Test.findById(isPatientData.test)
            // console.log(testDetail)
            res.status(200).json({
                message: "Get Data Successfully",
                patient: isPatientData,
                test: testDetail
            })
        } else {
            res.status.json({
                message: "No such Patient Exist"
            })
        }

    } catch (err) {
        res.status(404).json({
            error: err,
            status: "Fail",
            "message": "Technical Fault"
        })
    }
}
exports.getAllPatient = async (req, res) => {
    try {
        const allPatient = await Patient.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Get All Patient Successfully",
            data: allPatient
        })
    } catch (err) {
        res.status(404).json({
            error: err,
            status: "Fail",
            "message": "Technical Fault"
        })
    }
}
exports.deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await Patient.deleteOne({ _id: id })

        if (deleteUser.deletedCount > 0) {
            res.status(200).json({
                message: "Patient Delete Successfully",
                deleteUser: deleteUser
            })
        } else {
            res.status.json({
                "message": "Patient Doesn't Exist"
            })
        }

    } catch (err) {
        res.status(404).json({
            error: err,
            status: "Fail",
            "message": "Technical Fault"
        })
    }

}