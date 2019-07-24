module.exports = function(config) {
    config.set({
        files: [
            "**/*",
            "!node_modules/**/*"
        ],
        mutate: [ "src/**/*.spec.ts"],
        mutator: "javascript",
        reporters: [
            "progress", 
            "clear-text", 
            "html",
            "dashboard"
        ],
        coverageAnalysis: "off"
    });
}