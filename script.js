fetch("https://whatyearisit-backend-one-orpin.vercel.app")
  .then(response => response.json())
  .then(data => {
    let yearElement = document.getElementById("year");
    yearElement.textContent = data.year;
  });

