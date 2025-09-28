const Test = require("../Models/testModels");

exports.postTest = async (req, res) => {
    const body = req.body;
    console.log("Incoming data:", body);
    try {
        // const body = req.body;
        // console.log("Incoming data:", body);

        const isDataExist = await Test.findOne({ name: body.name });  // findOne- To fetch only one document that matches a condition.

        if (isDataExist) {
            return res.status(409).json({
                status: "fail",
                message: "Data Already Exist"
            });
        }

        const newTest = new Test(body);
        await newTest.save();

        res.status(201).json({
            status: "success",
            message: "Test created successfully",
            data: newTest
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};


exports.getTest = async (req, res) => {
    try {
        const testData = await Test.find({});

        if (testData) {
            return res.status(200).json({
                message: "Tests available",
                status: "Success",
                data: testData
            });
        } else {
            res.status(202).json({
                data: "fail",
                data: testData
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
    }
}

exports.getTestById = async (req, res) => {
    const { id } = req.params
    try {
        const testData = await Test.findById(id);

        if (testData) {
            return res.status(200).json({
                message: "Tests available",
                status: "Success",
                data: testData
            });
        } else {
            res.status(202).json({
                data: "fail",
                data: testData
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
    }
}

