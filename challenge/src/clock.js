function remainDate() {
    const xMasDate = new Date("2023-12-25");
    const todayDate = new Date();
    const remainDate = xMasDate - todayDate;
  
    console.log(remainDate);
  }

  remainDate();