---
title: Duration formatting hours minutes seconds
description: Converts a given time duration to a human-readable string in the format "hh:mm(:ss)"
author: Mcbencrafter
tags: java, time, formatting, hours, minutes, seconds
---

```java
package snippets.time;

import java.util.concurrent.TimeUnit;

public class DurationFormatterHoursMinutesSeconds {

    public static void main(String[] args) {
        System.out.println(formatDurationToHoursMinutesAndSeconds(3810, TimeUnit.SECONDS, true)); // "01:03:30"
        System.out.println(formatDurationToHoursMinutesAndSeconds(3810, TimeUnit.SECONDS, false)); // "01:03"
    }

    public static String formatDurationToHoursMinutesAndSeconds(int time, TimeUnit timeUnit, boolean showSeconds) {
        long totalSeconds = timeUnit.toSeconds(time);

        if (totalSeconds < 0)
            throw new IllegalArgumentException("Duration must be a non-negative value.");

        // These variables can be directly used in the return statement,
        // but are kept as separate variables here for better readability.
        long hours = totalSeconds / 3600;
        long minutes = (totalSeconds % 3600) / 60;
        long seconds = totalSeconds % 60;

        if (showSeconds) {
            return String.format("%02d:%02d:%02d", hours, minutes, seconds);
        } else {
            return String.format("%02d:%02d", hours, minutes);
        }
    }
}
```