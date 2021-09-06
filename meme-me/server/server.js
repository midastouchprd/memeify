require("dotenv").config();

/* ==== External Modules ==== */
const express = require("express");

/* ==== Instanced Modules  ==== */
const app = express(); 

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 5000;

/* ===== Server Listener ===== */

app.listen(PORT, () => {
    console.log(`server started on port:${PORT}`);
});
