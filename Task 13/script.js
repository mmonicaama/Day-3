document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");
            activateTab(tabId);
        });
    });

    function activateTab(tabId) {
        tabs.forEach(tab => tab.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        const tab = document.querySelector(`[data-tab="${tabId}"]`);
        const content = document.getElementById(tabId);

        tab.classList.add("active");
        content.classList.add("active");
    }
});
