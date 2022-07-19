
let happy = document.getElementById("happy");
happy.textContent = 10;

let count = 10;
setTimeout(() => {
  count = count - 1;
  happy.innerHTML = count;

  setTimeout(() => {
    count = count - 1;
    happy.innerHTML = count;

    setTimeout(() => {
      count = count - 1;
      happy.innerHTML = count;

      setTimeout(() => {
        count = count - 1;
        happy.innerHTML = count;

        setTimeout(() => {
          count = count - 1;
          happy.innerHTML = count;

          setTimeout(() => {
            count = count - 1;
            happy.innerHTML = count;

            setTimeout(() => {
              count = count - 1;
              happy.innerHTML = count;

              setTimeout(() => {
                count = count - 1;
                happy.innerHTML = count;

                setTimeout(() => {
                    count = count - 1;
                    happy.innerHTML = count;

                    setTimeout(() => {
                        count = count - 1;
                        happy.innerHTML = count;

                        setTimeout(() => {
                            count = count - 1;
                            happy.innerHTML = "Happy Independence Day";
                          }, 1000);
                      }, 1000);
                  }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
