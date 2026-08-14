document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    if (form) {
        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const formData = new FormData(form);

            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                gender: formData.get("gender"),
                department: formData.get("department"),
                date: formData.get("date")
            };

            try {

                const response = await fetch("PASTE_YOUR_N8N_WEBHOOK_URL_HERE", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert("Appointment Booked Successfully!");
                    form.reset();
                } else {
                    alert("Failed to book appointment.");
                }

            } catch (error) {
                console.error(error);
                alert("Could not connect to n8n.");
            }

        });
    }

});
