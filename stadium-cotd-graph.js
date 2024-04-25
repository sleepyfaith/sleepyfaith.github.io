        Chart.defaults.color = "white";
        Chart.defaults.backgroundColor = "white";

        var plugin = {
            id: 'bgColour',
            beforeDraw: (chart, args, options) => {
                const {ctx} = chart;
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = options.color;
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        };

        var dirtData = [{x:1, y:41}];
		var fsData = [{x:2, y:37}, {x:6, y:47}];
		var bobData = [{x:3, y:45}];
		var techData = [{x:4, y:41}];
		var multiData = [{x:5, y:45}];
		var reactorData = [{x: 7, y:40}];

		const cotd = document.getElementById("cotd-stadium");
        new Chart(cotd, {
            type: "scatter",
            data: {
                datasets: [{
                label: 'dirt',
                data: dirtData,
                pointRadius: 7,
                backgroundColor: 'rgb(181, 114, 72)'
            }, {
				label: "fullspeed",
				data: fsData,
				pointRadius: 7,
				backgroundColor: 'rgb(237, 83, 83)'
            }, {
				label: "bobsleigh",
				data: bobData,
				pointRadius: 7,
				backgroundColor: 'rgb(255, 255, 255)'
	    	}, {
				label: "tech",
				data: techData,
				pointRadius: 7,
				backgroundColor: 'rgb(70, 70, 70)'
		    }, {
				label: "multi-surface",
				data: multiData,
				pointRadius: 7,
				backgroundColor: 'rgb(255, 165, 0)'
		    }, {
				label: "reactor",
				data: reactorData,
				pointRadius: 7,
				backgroundColor: 'rgb(82, 93, 255)'
			}]},
            options: {
                plugins: {
					title: {
						display: true,
						text: "Cup of the Day",
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
        
