---
details:
  type:
  - Platform Control and Information Support
  characteristics:
  - Resiliency
  - Persistence
  - Speed
  risk_factors:
  - Dual-use
  domain:
  - Multidomain
  country:
  - Russia
  - United States
title: 'Resilient Communications for Command and Control of Nuclear Forces '
date: 2018-11-15T05:00:00.000+00:00
excerpt: The current United States Nuclear Command, Control, and Communications (NC3)
  enable the transport of situation monitoring from Intelligence, Surveillance, and
  Reconnaissance (ISR) data, nuclear force management, nuclear force direction in
  a communications system that uses multiple redundant, diverse, and resilient datalinks
  as part of the Nuclear Command and Control System (NCCS). Outside of the NC3 realm
  tactical commercial communications systems have been advancing the state of the
  technological innovation with the developments of Mobile Ad Hoc Network (MANET)
  capabilities, Spectrum Sensing Cognitive Radios, and data encryption schemes for
  a post-quantum world. These capabilities have the potential to augment the resiliency
  and flexibility of NC3; however, countries could find it difficult to signal that
  they are using them for NC3.
authors:
- _authors/oscar-guerrero.md
brief_type: Tech Primer
image: ''
image_caption: ''
image_source: ''
keywords:
- Entanglement
- Communications, Command and Control
downloads:
- label: Resilient Communications Primer
  media_upload: https://res.cloudinary.com/csisideaslab/image/upload/v1562865065/on-the-radar/Resilient%20command%20and%20control%20primer.pdf
featured_on_home: false
last-modified-date: 2018-11-15T05:00:00.000+00:00

---
##### Introduction
Communications for Command and Control (C2) of nuclear forces is the component of the U.S. Nuclear Command and Control System (NCCS) that provides the transport of leadership decisions to nuclear forces via a survivable communications system.[^1] To support the credible deterrent against nuclear attack, the NCCS Communications System of Systems (SoS) must be resilient against a myriad of environmental conditions and hostile environments and function through the nuclear trans attack and post attack stressing scenarios.[^2] The communications system must have a high availability to support operations of nuclear forces, be able to function through the effects of nuclear attack, have sufficient redundancy to transport data through the loss of several nodes from kinetic effects, and resist Electronic Counter Measures (ECM), all while ensuring the integrity and maintaining the confidentiality of the messages.[^3]

The NCCS employs several methods to provide a highly available communications systems. The NCCS uses path redundancy and path diversity by incorporating multiple parallel wired and wireless propagations modes to reduce the opportunity for any single points of failure or vulnerability. Wired communications links consist of terrestrial cabling infrastructure that is a hybrid network of twisted pair copper conductor wire bundles near the edge nodes with fiber optic cables at telecommunications aggregation points.[^4] Wireless communications links use (1) direct wave line of sight (LOS) transmissions, (2) ground wave transmissions, (3) sky wave transmissions, and (4) relay transmissions using aircraft or satellites in frequency bands ranging from Very Low frequency (VLF) up through Extremely High Frequency (EHF) as a mitigation against nuclear weapons effects to reach land based, airborne, and undersea nuclear forces as shown below in figure 1.[^5] To maintain the confidentiality and integrity of messages, communications systems use Transmission Security techniques such as Frequency Hopping Spread Spectrum (FHSS) and Communications Security (COMSEC) techniques of data in transit encryption using strong cryptography.[^6]

***

[^1]: Office of the Deputy Assistant Secretary of Defense for Nuclear Matters, Nuclear Matters Handbook 2016, (Washington, D.C.: Office of the Deputy Assistant Secretary of Defense for Nuclear Matters, 2016) 73-81. [https://www.acq.osd.mil/ncbdp/nm/nmhb/docs/NMHB_2016-optimized.pdf](https://www.acq.osd.mil/ncbdp/nm/nmhb/docs/NMHB_2016-optimized.pdf "https://www.acq.osd.mil/ncbdp/nm/nmhb/docs/NMHB_2016-optimized.pdf").

[^2]: Systems of Systems are independently useful systems into a larger system that delivers unique capabilities. See: Office of the Deputy Under Secretary of Defense for Acquisition and Technology, Systems and Software Engineering. Systems Engineering Guide for Systems of Systems Version 1.0, (Washington, DC: ODUSD(A&T)SSE, 2008) [https://www.acq.osd.mil/se/docs/se-guide-for-sos.pdf](https://www.acq.osd.mil/se/docs/se-guide-for-sos.pdf "https://www.acq.osd.mil/se/docs/se-guide-for-sos.pdf"); Trans-attack period is the "period from the initiation of the (nuclear) attack to its termination - the post-attack period extends from the termination of the physical attack until political authorities agree to terminate hostilities (that may still have post nuclear detonation effects).” See: U.S. Department of Defense, Office of the Secretary of Defense, Deterrence, Nuclear Strategy and the Post-Attack Environment, by Kostas J. Liopiros, June 22, 1981, declassified March 1, 2016, [https://www.archives.gov/files/2011-016-doc01.pdf](https://www.archives.gov/files/2011-016-doc01.pdf "https://www.archives.gov/files/2011-016-doc01.pdf").

[^3]: Availability refers to the ability of users to use a system when it is needed without delays or service interruptions; A communications node is a relay, redistribution, or end point in a communications network; Integrity refers to assuring the accuracy and completeness of messages and data over a system; Confidentiality means assuring that the messages are only processed or read by the intended recipient(s).

[^4]: Cellular Service towers (ENodeB stations) use terrestrial backhaul networks to tie into telecommunications infrastructure; In areas lacking physical wiring infrastructure wireless microwave relays are used as terrestrial relays.

[^5]: Ashton Carter, “The Command and Control of Nuclear War”, _Scientific American_, January 1985, [https://www.belfercenter.org/sites/default/files/legacy/files/scientificamerican0185-32.pdf](https://www.belfercenter.org/sites/default/files/legacy/files/scientificamerican0185-32.pdf "https://www.belfercenter.org/sites/default/files/legacy/files/scientificamerican0185-32.pdf"); Project Sanguine Extremely Low Frequency (ELF) Transmitters were shut down by the US Navy in 2004. See Joseph Stromberg, “Why the US Navy once wanted to turn Wisconsin into the world’s largest antenna,” _Vox_, April 10, 2015, [https://www.vox.com/2015/4/10/8381983/project-sanguine](https://www.vox.com/2015/4/10/8381983/project-sanguine "https://www.vox.com/2015/4/10/8381983/project-sanguine").

[^6]: Spreading the spectrum of signals reduces the effectiveness of narrowband interference from jammers while also reducing the probability of detection as the spreading of the signals may be interpreted as background electronic noise. Frequency hopping switches amongst available frequency channels in a pseudorandom sequence to mitigate jamming and eavesdropping.