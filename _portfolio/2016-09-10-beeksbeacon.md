---
title: "BeeksBeacon"
date: 2016-09-10 00:00:00
excerpt: "A context--aware admin dashboard of nearby beacons; demo of CMU GIoTTO infrastructure."
header:
  teaser: bb_header.png
author_profile: true
gallery:
  - url: bb_main.png
    image_path: bb_main.png
    title: "Main activity"
  - url: bb_scanning.png
    image_path: bb_scanning.png
    title: "Scanning through 10 seconds"
  - url: bb_scan_rlt.png
    image_path: bb_scan_rlt.png
    title: "Scan result of a real working environment"
  - url: bb_management.png
    image_path: bb_management.png
    title: "Management/Registering fragment of a selected beacon instance"
  - url: bb_geoinfo.png
    image_path: bb_geoinfo.png
    title: "Tuning geographical information of a selected beacon instance"
  - url: bb_logistics.png
    image_path: bb_logistics.png
    title: "Logistics fragment of a selected beacon instance"
---

<br>
[BeeksBeacon](http://github.com/cullengao/beeksbeacon) is a demo that I made for [GIoTTO](http://www.cmu.edu/news/stories/archives/2015/july/google-internet-of-things.html) project. It provides a way to accurately sharing and tuning beacons contextual information using *Bluvision Technology*, so as registering them onto Google cloud via its APIs.

In this project, global administration on beacons could be achieved by wrapping underlying differences between existing raw protocols (*sBeacon*, *iBeacon*, *Eddystone*, *AltBeacon*). Admin could first scan all beacons by moving around, then flow registering them onto customized server. All logistics and Geographical informations are updated every-time the smartphone entering beacon's advertising range. BeeksBeacon also allows users to communicate with each other not through server but only beacon by attach temporary data blob onto a specific beacon as a hop.

This project serves as a framework for further cooperation between *CMU* and *Google Co.* regarding to IoT infrastructure. Providers & Researchers could simply leverage this application to setup swift experimental environment, so as to extend existing configuration, given all beacons are treated from one base class blocking up bottom-end details.

---

Below shows the basic UI of the application itself:
{% include gallery %}
