        Chart.defaults.color = "white";
        Chart.defaults.backgroundColor = "white";

        var plugin = {
            id: 'bgColour',
            beforeDraw: (chart, args, options) => {
                const {ctx} = chart;
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = options.color || '#99ffff';
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        };

        var plstcData = [{x:1, y:4}];

		const cotn = document.getElementById("cotn");
        new Chart(cotn, {
            type: "scatter",
            data: {
                datasets: [{
                label: 'plastic',
                data: plstcData,
                pointRadius: 7,
                backgroundColor: 'rgb(255, 253, 122)'
            }]},
            options: {
                plugins: {
					title: {
						display: true,
						text: "Cup of the Night",
						font: {
							size: 40
						}
					},
                    bgColour: {
                       color: 'rgb(0,0,0,0.5)',
                    },
                    legend: {
                        labels: {
                            font: {
                                size: 20,
                            }
                        },
                        ticks: {
                            font: {
                                size: 20,
                            }
                        }

                    },
                },
                scales: {
                    x: {  
                        grid: {
                            color: "white"
                        },
                        ticks: {
                            color: "white",
                            font: {
                            size: 15, 
                            },
                            stepSize: 1
                        }
                    },
                    y: {  
                        grid: {
                            color: "white"
                        },
                        ticks: {
                            color: "white",
                            font: {
                            size: 15, 
                            },
                            stepSize: 1,
                            beginAtZero: true,

                        },
                        reverse: true
                    },
                }

            },
            plugins: [plugin],
        });
        