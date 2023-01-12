const data = {
    options: {
        chart: {
            id: "revenue-chart",
            height: 350,
            type: "line",
            stacked: false,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#69b2f8", "#00E396", "#00b8d4"],
        grid: {
            borderColor: "#90A4AE",
        },
        stroke: {
            width: [0, 2, 3],
            curve: "smooth",
        },
        plotOptions: {
            bar: {
                columnWidth: "40%",
            },
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            "01/01/2003",
            "02/01/2003",
            "03/01/2003",
            "04/01/2003",
            "05/01/2003",
            "06/01/2003",
            "07/01/2003",
            "08/01/2003",
            "09/01/2003",
            "10/01/2003",
            "11/01/2003",
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            min: 0,
            labels: {
                style: {
                    colors: ["#ffffff"],
                },
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                title: {
                    formatter: (seriesName: string): string => seriesName,
                },
            },
            z: {
                formatter: undefined,
                title: "Size: ",
            },
        },
        legend: {
            show: false,
        },
    },
    series: [
        {
            name: "Orders",
            type: "column" as const,
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
            name: "Sales",
            type: "area" as const,
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: "Visitors",
            type: "line" as const,
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
    ],
};

export default data;
