const router = require("express").Router(),
    employeeController = require("../controller/employeeController");

router.get("/", employeeController.read);
router.get("/:id", employeeController.find)
router.post("/", employeeController.create);
router.put("/:id", employeeController.update);
router.delete("/:id", employeeController.delete);

module.exports = router;