
const chartData={
     labels: ["Lipgloss", "Mascara", "Blush", "Primer", "Eyebrow Promade" ],
     
     data: [30, 50, 80, 20, 10],
}


const customerchart=document.querySelector(".customerchart");

// new arguments //
new Chart(customerchart,{
  type: 'doughnut',
  data: {
    labels: chartData.labels,

    // entering data sets and objects//
    datasets:[

        {
label:'Customers Most liked Products',
data: chartData.data,
backgroundColor: [
      'rgba(255, 163, 183, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(255, 63, 63, 1)',
      'rgba(253, 215, 144, 1)',
      'rgba(99, 55, 6, 1)',
    ],

        },
    ],
  },

  options:{
    borderWidth: 8,
    borderRadius:4,
    hoverBorderWidth: 1,

    plugins: {
        legend:{
            display: false,
        }
    }
  }

})