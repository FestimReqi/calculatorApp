$(document).ready(function() {
    $("#darkModeButton").click(function() {
        $("body").toggleClass("dark-mode"); // Toggle the dark mode class on the body
        
        // Toggle the visibility of the icons
        $(".light-mode-icon").toggle();
        $(".dark-mode-icon").toggle();
        
        // Optionally, you can store the user's preference in localStorage
        const isDarkMode = $("body").hasClass("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    });

    // Check user preference for dark mode on page load
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference === "enabled") {
        $("body").addClass("dark-mode");
        $(".light-mode-icon").hide();
        $(".dark-mode-icon").show();
    }
});
