module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },

    daisyui: {
        themes: [
            {
                remcTheme: {
                    primary: "#e4e5f1",
                    secondary: "#9394a5",
                    accent: "#484b6a",
                    neutral: "#3d4451",
                    "base-100": "#fafafa",
                },
            },
            "dark",
            "cupcake",
        ],
    },

    plugins: [require("daisyui")],
};
