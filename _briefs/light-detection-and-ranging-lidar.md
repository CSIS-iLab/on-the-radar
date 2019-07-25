---
last-modified-date: 2019-07-25T17:30:08.000+00:00
details:
  type:
  - Sensors
  - Platform Control and Information Support
  characteristics:
  - Persistence
  - Precision
  - Vantage/range
  risk_factors:
  - Vulnerable
  domain:
  - Sea
  - Air
  country:
  - United States
title: Light Detection and Ranging (LIDAR)
date: 2019-01-19T05:00:00.000+00:00
excerpt: Light detection and ranging (LIDAR) is an active-sensor technique that generates
  spatial data from the reflection of laser pulses from objects. The technique is
  useful for rapidly mapping terrain, chemical/biological weapons detection, demining,
  anti-submarine warfare, and scene-data-based navigation.
authors:
- _authors/jake-hecla.md
brief_type: Tech Primer
image: https://res.cloudinary.com/csisideaslab/image/upload/v1564062656/on-the-radar/Sensors-2.jpg
image_caption: ''
image_source: ''
keywords:
- First-mover incentive
- Information Complexity
downloads:
- label: LIDAR primer
  media_upload: https://res.cloudinary.com/csisideaslab/image/upload/v1564077677/on-the-radar/LIDAR%20primer%207-25-19.pdf
featured_on_home: false

---
##### Introduction

Light detection and ranging (LIDAR) is an active-sensor technique that generates spatial data from the reflection of laser pulses from objects. Though the technique is best known for its use in rapidly mapping terrain, it has applications in chemical/biological weapons detection, demining, anti-submarine warfare, and scene-data-based navigation. Because of a robust private sector demand for unmanned aerial vehicle (UAV) and autonomous vehicle mapping and navigation capabilities based on LIDAR, the technology has advanced rapidly over the last decade. The <define>strategic situational awareness</define> (SA) improvements conferred by the addition of these technologies to existing platforms are wide-ranging. LIDAR based navigation presents significant improvements in <define>persistence<define/>, whereas mapping and imaging applications offer improvements in <define>precision</define>, <define>speed</define>, and <define>vantage</define>. Because of the rapid commercialization of LIDAR devices, the availability, performance, and cost of these systems is rapidly improving. Therefore, these systems are likely to become increasingly relevant technologies for strategic SA.

##### Theory of Operation

LIDAR systems are based on time-of-flight optical <define>range</define> finding technology. Traditional LIDAR systems measure the timing of the reflection of microsecond-length laser pulses emitted from a rotating or scanning optical assembly (excepting phased-array LIDAR systems, which steer beams through purely optoelectronic methods). The time difference between the emission and the receipt of the reflected pulses then is used to determine the distance to the reflecting object. These systems typically use infrared (IR) emitters pulsed at tens to hundreds of kilohertz and have range capabilities of 100m to several km. Commercial systems range from narrow-beam <define/>speed</define> detection systems to 360-degree mapping LIDAR devices for automated vehicle navigation. Specialized variants may use frequency ranges that are tailored for specific detector missions such as underwater sensing, through-cloud imaging, or aerosol detection.

For most commercial applications, the intent of the LIDAR data is to create human-viewable 3D maps of objects or terrain. In this case, the point-cloud data resulting from LIDAR scans can be filtered and colored using camera data, then further manipulated (typically converted to a mesh) to create a human-interpretable data product. This can be done in a highly automated fashion and can provide a highly detailed, human-readable 3D mapping capability in real time.

Simultaneous localization and mapping (SLAM) algorithms offer the ability to use LIDAR returns as a means of scene-aware navigation that does not require GPS or an accelerometer. SLAM algorithms use changes in the scene information (changes in the apparent location of features) to determine the rotation and translation of the detector system. By tracking the changes in orientation, the system can determine where it is in space, where it was in space, and how fast it is moving. This orientation information can be used to augment or replace accelerometer or gyroscope data, providing improved position estimation and redundancy. In some cases, this can be combined with previously-loaded map data to enable long-distance navigation without externally-dependent navigation systems (such as GPS, surface radio beacons, or GLONASS).

Specialized LIDAR systems can be used to detect aerosols, which can be used as means of mapping biological or chemical warfare agent releases. By using information on backscatter color, return ratio (fraction of reflected light), and changes in light polarization, the particulate size, composition, and density can be determined.\[^1\] This capability was explored heavily by the U.S. military in the 1990s as a counter-WMD capability in the Long Range Biological Standoff Detection System (LR-BSDS). Likewise, these techniques can be used to pick up dust and smoke generated by vehicle movement or rocket launches, and potentially distinguish between them.

ViDAR (video detection and ranging), a technology closely related to LIDAR, offers a means of generating point-cloud data similar to LIDAR without the use of active sensing elements. This technique uses changes in image features extracted from video to reconstruct a 3D point cloud using a “structure from motion” (SfM) algorithm. Although this technique offers detailed colored reconstructions, it is extremely computationally intensive and therefore marginally viable as a real-time mapping or navigation aid.

***

\[^1\]: Aerosol detection methods in lidar-based atmospheric profiling. Mohamed I. Elbakary, Khan M. Iftekharuddin, Russell De Young, Kwasi Afrifa.