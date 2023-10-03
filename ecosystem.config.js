module.exports = {
    apps: [
        {
            name: "vue-app",
            script: "npm",
            args: "run dev",
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: "1G",
        },
    ],
};









