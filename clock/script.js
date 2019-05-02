customElements.define('clock-calendar', class extends HTMLElement {
  constructor() {
    super();

    let now = new Date();
    let hours = now.getHours();
    hours = (hours < 10)?`0${hours}`: hours;
    let minutes = now.getMinutes();
    minutes = (minutes < 10)?`0${minutes}`: minutes;
    let month = now.getMonth() + 1;
    month = (month < 10)?`0${month}`: month;
    let day = now.getDate();
    day = (day < 10)?`0${day}`: day;
    let year = now.getFullYear();
    let uaYear = year.toString().substring(2);

    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
          <style>
          #root { 
            width: 300px;
            height: 50px;
            margin: 200px auto;
            text-align: center;
            font-size: 44px;
            cursor: pointer;
           }</style>
           
          <div id="root"></div>`;

    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));

    let root = this.shadowRoot.querySelector('#root');
    root.textContent = `${hours} : ${minutes}`;

    let fullTime = true;
    let toggCalendar = true;
    let dateFlag = true;
    let interval;

    this.addEventListener('click', event => {
      event.preventDefault();
      clearInterval(interval);

      if (!toggCalendar) {
        if (!dateFlag) {
          root.textContent = `${month}.${day}.${uaYear}`;
          dateFlag = true;
        } else {
          root.textContent = `${day} / ${month} / ${year}`;
          dateFlag = false;
        }
      } else {
        if (!fullTime) {
          root.textContent = `${hours} : ${minutes}`;
          fullTime = true;
        } else {
          this.getFullTime();
        }
      }
    });

    this.addEventListener('contextmenu', event => {
      event.preventDefault();
      clearInterval(interval);
      if (toggCalendar) {
        root.textContent = `${month} / ${day} / ${year}`;
        toggCalendar = false;
        dateFlag = false;
      } else {
        root.textContent = `${hours} : ${minutes}`;
        toggCalendar = true;
        fullTime = true;
      }
    }, false);

    this.getFullTime = () => {
      interval = setInterval(() => {
        let currentTime = new Date();
        let seconds = currentTime.getSeconds();
        let minutes = currentTime.getMinutes();
        seconds = (seconds < 10) ?`0${seconds}`: seconds;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        root.textContent = `${hours} : ${minutes} : ${seconds}`;
        fullTime = false;
      });
    };

    this.addEventListener('mouseover', event => {
      root.style.background = 'lightgray';
    });

    this.addEventListener('mouseleave', event => {
      root.style.background = 'white';
    });


  };
});

