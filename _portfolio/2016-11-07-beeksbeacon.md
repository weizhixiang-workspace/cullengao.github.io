---
title: "BeeksBeacon"
date: 2016-09-10 00:00:00
excerpt: "A context­aware admin dashboard of nearby beacons."
header:
  teaser: bb_header.png
author_profile: true
gallery:
  - url: lsnm_ui.png
    image_path: lsnm_ui.png
    alt: "The User Interface of LSNM"
---

<br>
[LSNM](http://github.com/cullengao/lsnm) is an extension for network monitoring via LSM (Linux Security Module). It provides a direct console for system admins to modify local local network security policy and monitor its general behaviors.

## Features
+ manual paging:

    {% highlight sh %}
    $ lsnm <commend> --help{% endhighlight %}

+ switching:

    {% highlight sh %}
    $ lsnm activate -s black/white # activate blacklist/whitelist mode
    $ lsnm deactivate # deactivate LSNM module{% endhighlight %}

+ rule setting:

    {% highlight sh %}
    $ lsnm insert [args] # insert new rules to local policy
    $ lsnm delete [args] # delete exsiting rules from local policy
    $ lsnm clear -r black/white # reset all rules of blacklist/whitelist
    $ lsnm display -r black/white # display current policy of blacklist/whitelist{% endhighlight %}

    example:

    {% highlight sh %}
    $ lsnm insert --help
    $ >> '
        Usage: lsnm insert [OPTIONS]

        Options:
          -r, --rule [white|black]        Filtering rule to the select list
          -un, --user-name TEXT           User name
          -pn, --process-name TEXT        Process name
          -pid, --process-id INTEGER      Process id
          -pt, --protocol [None|ICMP|UDP|TCP]
                                          Protocol
          -sp, --source-port INTEGER RANGE
                                          Source Port
          -dp, --destination-port INTEGER RANGE
                                          Destination Port
          -a, --address TEXT              Address
          --help                          Show this message and exit.
        '
    $ lsnm insert -r black -un root -pn firefox -pid 2783 -pt TCP -sp 5000 -dp 443 -a 220.181.57.217
    $ lsnm display # default current rule-set mode
    $ >> '
        **** LSNM [Display Rules]: black
        # ipaddr            srcport     ptc     pname       pid     uid     dstport
        1 220.181.57.217    5000        TCP     firefox     2783    0       443
        '
    $ lsnm delete -r black -i 3 # delete thrid indexed rule
    $ lsnm clear -r black # reset blacklist{% endhighlight %}

+ logging:

    {% highlight sh %}
    $ lsnm log --on/off{% endhighlight %}

+ defensing: automatically blocking anomaly packaging of DDoS (Distributed denial-of-service attack)

## Highlights
By hooking up embedded functions in root mode of Linux kernel, the project has so far beaten other similar applications, such as *iptables*, basically because of:

+ Run-time Efficiency
+ Continuous Logging via Asynchronous Threading
+ General Defense Policy against DDoS

<br>
Below shows the basic UI of the command line tool:
{% include gallery caption="Demo for LSNM" %}
