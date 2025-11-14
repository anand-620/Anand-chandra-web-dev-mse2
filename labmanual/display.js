import { calculateSimpleInterest } from "./calculate.js";

const button = document.getElementById("calculateBtn");

button.addEventListener("click", () => {
    const p = Number(document.getElementById("principal").value);
    const r = Number(document.getElementById("rate").value);
    const t = Number(document.getElementById("time").value);

    if (p === 0 || r === 0 || t === 0) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    const interest = calculateSimpleInterest(p, r, t);

    document.getElementById("result").innerHTML =
        `Simple Interest: ₹${interest}`;
});
