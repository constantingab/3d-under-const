(function () {
  var _id = "31a0fea0b511714a20193c106b64c4d7";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write(
    "<div id='timer" + _id + "' style='min-width:567px;height:86px;'></div>"
  );
  var _t = document.createElement("script");
  _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
  var _f = function (_k) {
    var l = new MegaTimer(_id, {
      view: [1, 1, 1, 1],
      type: {
        currentType: "3",
        params: {
          weekdays: [1, 1, 1, 1, 1, 1, 1],
          usertime: true,
          time: "00:00",
          tz: -180,
          hours: "400",
          minutes: "1",
        },
      },
      design: {
        type: "plate",
        params: {
          round: "10",
          background: "opacity",
          effect: "slide",
          space: "0",
          "separator-margin": "0",
          "number-font-family": {
            family: "Russo One",
            link: "<link href='//fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "number-font-size": "60",
          "number-font-color": "#ffffff",
          padding: "12",
          "separator-on": true,
          "separator-text": ":",
          "text-on": false,
          "text-font-family": { family: "Arial" },
          "text-font-size": "12",
          "text-font-color": "red",
        },
      },
      designId: 4,
      theme: "white",
      width: 567,
      height: 86,
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function () {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);
