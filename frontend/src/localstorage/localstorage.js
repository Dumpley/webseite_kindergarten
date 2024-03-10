export default {
    saveLoginDetails(admin_name) {
        localStorage.setItem("Admin", admin_name);
    },
    recallLoginDetails() {
        if (!localStorage.getItem("Admin")) return null;
        else {
            const admin = localStorage.getItem("Admin");
            return admin;
        }
    },
};
