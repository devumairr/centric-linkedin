const data = {
    options: {
        labels: ["New Customer", "Revenue", "Product Sold", "Profit"],
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "50%",
                },
            },
        },
        colors: ["#00cccc", "#7ebcff", "#7ee5e5", "#fdbd88"],
        stroke: {
            colors: ["#ffffff"],
        },
    },
    series: [20, 20, 30, 25],
};

export default data;
