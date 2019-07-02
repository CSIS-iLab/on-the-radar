---
details:
  type:
  - Unmanned Vehicles
  characteristics:
  - Speed
  - Persistence
  - Vantage/range
  risk_factors:
  - Action-enabling
  - Dual-use
  - Intrusive
  domain:
  - Sea
  country:
  - China
  - Russia
  - United States
title: 'Unmanned Underwater Vehicle (UUV) Systems for Submarine Detection: A Technology
  Primer'
date: 2019-03-25T04:00:00.000+00:00
excerpt: |-
  * Unmanned underwater vehicles (UUVs) are an emerging class of unmanned maritime vehicles (UMVs) with the potential to transform anti-submarine warfare (ASW) through new capabilities for sensing in the sea domain.
  * UUV systems integrated into frontier submarine sensing technologies offer new positions (_increased vantage_) from which information can be ascertained. UUV systems exemplify new tactical-level systems for detection and tracking given new adversary capabilities.
  * Their small size and stealthy deployment may allow for reconnaissance in a contested environment that—when integrated into sensor networks and existing tailing capabilities—might increase the fidelity of information available to decision-makers.
authors:
- _authors/andrew-reddie.md
- _authors/bethany-goldblum.md
brief_type: Tech Primer
image: https://res.cloudinary.com/csisideaslab/image/upload/v1560366688/on-the-radar/UUV%20Primer-1.pdf
image_caption: ''
image_source: ''
downloads: []

---
**_Introduction_**

The oceans have long represented a challenging environment for sensing technologies. Onboard passive sensors have historically faced technological limitations due to low signal-to-noise and inhospitable sensing environments. Additionally, the vantage restrictions posed by static positioning of sea-based sensors, whether active or passive, has allowed submarines to travel vast swathes of the oceans largely undetected. As a result, sea-launched ballistic missiles have been important to ensuring a second-strike capability and maintaining the strategic balance between nuclear adversaries. New, mobile, and active sensing technologies, however, are changing this status quo and leaving submarine forces increasingly vulnerable to detection. These new sensing systems combined with smart data processing techniques for decision support have the potential to substantially impact strategic situational awareness.

Unmanned underwater vehicles (UUVs) are an emerging class of unmanned maritime vehicles (UMVs) with the potential to transform anti-submarine warfare (ASW) through new capabilities for sensing in the sea domain. These technologies—also known as "submarine drones"— employ active sonar to detect, characterize, and track adversary submarines via an unmanned mobile platform under the sea. The UUV system allows access to shallow or previously difficult-to-penetrate waters and provides a dynamic platform for observation and detection. UUV vehicles augment existing platforms used to track adversary submarines including the airborne Poseidon 8-A, surface-based submarine hunters, and manned submarines. The unmanned characteristic of UUVs and potential for autonomous use (as well as their relatively small size) separate them from existing ASW technologies.[\[1\]](#_ftn1) UUVs are also designed to deploy cutting-edge sensing tools.

Given the importance of sensing tools deployed on the platform, active sonar is discussed in detail below. Active sonar works by emitting sound waves and detecting the reflected waves, or echoes, using hydrophones. While active sonar was introduced early in the 20th century and is not in itself a new technology, the incorporation of active sonar on UUV platforms allows for the exploitation of this capability without risk to military personnel and greatly increases the range over which data can be collected. The unmanned nature of these systems substantially decreases the risk associated with both the emission of sound waves (telegraphing position) and travel in hostile waters. Advanced UUVs trackers may also employ synthetic aperture sonar,[\[2\]](#_ftn2) which incorporates post-processing of sonar data to develop landscapes of the detected space. The detection range for active sonar depends on the speed and design of the UUV, sonar frequency, ocean conditions, and sophistication of the synthetic aperture sonar sensors and post-processing algorithms.[\[3\]](#_ftn3)

Submarine drone technology complements existing passive sonar, hydrophone, and wake detection systems to enhance maritime situational awareness. The DARPA-sponsored Submarine Hold at RisK (SHARK) UUV, developed by Applied Physical Systems, serves as an example of this type of emerging technology. The SHARK UUV is an active sonar platform designed to detect and track stealth submarines. The U.S. Navy has further considered the use of UUVs for a variety of missions including intelligence, surveillance, and reconnaissance (ISR), communications, and mine countermeasures. For example, Bluefin Robotics is developing the SandShark micro-autonomous underwater vehicle designed for ISR and ASW with decoy capabilities to be launched from larger UUV systems. These systems seek to increase the ability of military actors to characterize and track adversary nuclear and diesel-powered submarines, with dual nuclear/conventional ISR implications.

UUV platforms are also a part of the broader Distributed Agile Submarine Hunting (DASH) program that includes the Transformational Reliable Acoustic Path System (TRAPS) system of “drop and forget” passive sonar devices developed by SAIC. The TRAPS system represents an update to the existing Integrated Undersea Surveillance System (IUSS) comprised of hydrophone sensors, passive sonar, patrol aircraft, frigates, Slocum gliders, and nuclear submarines to detect and track adversary submarines.[\[4\]](#_ftn4) The U.S. Navy has used these types of systems since the 1950s to provide tactical information to ASW forces. Soviet forces in the Cold War used similar sonar and magnetic anomaly detection tools in their own ASW effort. Unlike older systems, these new capabilities are designed to be both scalable and affordable in terms of production and manpower costs. Further, as UUVs are unmanned mobile systems, they offer new opportunities for providing situational awareness without putting sailors at risk, but their widespread use carries with it the risk of introducing of new threats to strategic stability. In the following, we outline the current state of the technology before noting its impact upon situational awareness and the risks posed by the technology to strategic stability.

**_State of Play_**

_Time Horizons:_ New submarine tracking and detection systems are in the prototype phase with significant testing of UUV systems taking place over the past five years and an expected five to ten-year timeline for deployment in ISR and ASW missions. The major engineering challenges related to developing UUV systems for tracking submarines include the propulsion system, fueling system, communications systems (specifically dealing with propagation delays and errors caused by shadow zones), and the corrosion of materials in a high-pressure, salt-water setting. The requirements of the propulsion system, in particular, have been a subject of considerable debate with the need to balance the maximum range, duration, and speed of the system. Various manufacturers have addressed these requirements in different ways. Boeing’s Echo Voyager vessel, for example, is designed to be deployed for months at a time with a range of 6,500 nautical miles while other UUV systems would be deployed from submarines and surface vessels for only hours at a time. Existing UUV prototypes have a maximum speed of 8 knots with modal speed among platforms of 2-3 knots. To date, a number of platforms have tested hybrid, lithium-ion battery, and electric propulsion systems while fuel cells, aluminum power capability, and air-independent power also offer potential alternatives.

_R&D Challenges:_ Currently, the United States is at the forefront of deploying UUVs to track detected submarines. However, the Chinese Academy of Science is carrying out various research efforts on UMVs.

The major challenge associated with the use of UUVs stems from the limitations of existing communications equipment in an ocean environment. Currently, UUVs have to surface to communicate—whether with other naval vessels in the vicinity or to land bases. This limitation has led to recent research on A Mechanically Based Antenna (AMEBA) designed to produce low-frequency electromagnetic pulses that can be transmitted through water. Alternatively, Boeing—as it develops its Echo Voyager UUV—has designed the system to operate autonomously (with no pilot “in-the-loop”) given the difficulty communicating and thus piloting the vessel underwater.

The other major R&D challenges concern the limited power available to operate sensors on UUVs—as most power is used for propulsion—and fitting active sonar systems to existing UUV prototypes given their relatively small size.

_Cost:_ The SHARK UUV system—and the broader DASH program of which it is a constituent technology—is designed to offer a relatively low-cost alternative to existing detection and tracking tools such as “tailing” adversary submarines with other craft. For example, the SHARK system uses commercial-off-the-shelf (COTS) parts as part of a cost reduction strategy. The use of COTS technology may subsequently increase the proliferation of UUV technology across multiple countries. There are, however, trade-offs associated with developing UUV systems rather than stand-alone active sonar nodes due to the added complexity associated with developing both a UUV vehicle and sensing components. The research and development associated with UUVs is marginal and builds on existing advances in autonomous technology and remote sensing. DARPA, for example, provided a $4.6M grant to BAE Systems targeting the creation of a miniaturized active sonar system for UUVs deployed from a traditional submarine.

**_Effects on Situational Awareness_**

UUV systems integrated into frontier submarine sensing technologies offer new positions (_increased vantage_) from which information can be ascertained. Indeed, UUV systems exemplify new tactical-level systems for detection and tracking given new adversary capabilities—in this case, the proliferation of quiet (acoustic quieting) technology. Their small size and stealthy deployment may allow for reconnaissance in a contested environment that—when integrated into sensor networks and existing tailing capabilities—might increase the fidelity of information available to decision-makers. UUVs might also be deployed in various chokepoints or shallow waters, where adversary submarines are most vulnerable to detection.

Given the contemporary challenges communicating underwater, UUV information provision is not _resilient_ in environments where they are unable to contact parent vessels or shore stations to relay relevant situational awareness information. With that said, advances in low-frequency radio communication technology and laser optical communications may increase the _persistence_ of information—the ability to continuously collect data on adversary submarine location, depth, and signatures—even in contested waters in the future.[\[5\]](#_ftn5)[\[6\]](#_ftn6) The marine environment is an inherently challenging one for sensors designed for detection and tracking given the existence of various geographical anomalies, the variability of the environment, and the challenges of operating in shallow water where the surface returns interfere with the signal from the seafloor that sensing technologies on UUVs have to overcome.

UUVs and the sensor networks of which they are a part are also designed to increase the _speed_ at which adversary submarines are detected by augmenting existing ASW capabilities.

UUVs—as currently designed—are not stealthy and are, thus, _detectable_ by adversary sonar.[\[7\]](#_ftn7) Micro-UUV, stealthy delivery systems, and quieting technology that minimize acoustic signatures for manned submarines may decrease the likelihood of UUV detection. The DARPA Hydra program serves as an example of a prototype stealthy delivery system to insert UUVs and UAVs into contested environments.

**_Risk Factors for Strategic Stability_**

The propagation of detection and tracking technologies increases the pay-offs gained by an _intrusion_ into adversary waters and increases the importance of specific geographical locations. Indeed, UUV tracking technology is most useful at geographical chokepoints, such as the Greenland-Iceland-UK (GIUK) Gap, at adversary ports of entry/exit, and in shallow waters—where traditional acoustic detection methods are less likely to work.[\[8\]](#_ftn8) As such, these geographical locations become increasingly important and have the potential to become increasingly contested. Indeed, UUVs are specifically designed to detect and provide information regarding the characteristics of adversary strategic assets. As a consequence, deployed UUVs and their delivery vehicles represent a target for countermeasures.

UUVs are not necessarily _destructive_—as they do not require degradation of or interference with an adversary submarine to pass information regarding its whereabouts. However, a number of research programs have discussed the possibility of weaponizing UUV platforms in the future.

Given advances in autonomous and communication technology, UUVs should allow states to react to adversary actions by revealing force positions and to potentially _predict_ its strategic actions—particularly if coupled with advances in support technologies such as machine learning and advanced data analytics related to acoustic and wake detection in a marine environment.

UUV technology is also _dual-use_ in the sense that they are used for civilian and military purposes. UUV technology has already been deployed in various research and economic endeavors. Both marine biologists and oil prospecting companies have used UUV technology to research the sea floor. While not contributing to a nuclear force posture, UUVs are designed to track adversary vessels with both conventional and nuclear payloads. As discussed in greater detail below, this has the potential to change the deterrence calculus by lessening the survivability of adversary craft and the submarine leg of the triad.

Given the strategic consequences of information passed on by UUV and other submarine sensing technologies, they work best as _clandestine_ tools. If the existence of these situational awareness tools is revealed, an adversary is likely to change their behavior, destroy the platforms, or deploy countermeasures. The UUV active sonar and alternative sensing capabilities, however, are unaffected if adversaries detect it.

Given the challenges associated with operating in an ocean environment, an opponent _cannot easily deny_ the use of the technology without destroying it. UUVs, building upon advances in unmanned aerial vehicles, may also present difficult targets given their small size and economical design.

Finally, UUVs are _action-enabling_ in the sense that they provide new targets for surveillance and counterforce operations. Upon receipt of information concerning the whereabouts of adversary submarine assets from a UUV, traditional naval vessels—as well as other UUV technologies—can be used to track its behavior and employ counterforce measures when and where appropriate.

**_Concluding Remarks: Risks versus Rewards of a Transparent Ocean Environment_**

The ability of nuclear submarines to be detected and tracked by UUVs diminishes their _survivability_, and this increased vulnerability may influence decision-making timelines. Both the 2010 and 2018 Nuclear Posture Reviews note that SSBNs represent the most survivable leg of the U.S. triad and there is consistent and significant importance placed on the survivability of the sea-borne leg of the triad in the decades-long U.S. nuclear policy.[\[9\]](#_ftn9) In triad-based nuclear deterrents, SLBMs traditionally offer decision-makers flexibility and stealth capabilities not afforded by ICBMs (particularly those held in silos) and airdropped nuclear weapons subject to air defenses. The vast majority of U.S. strategic nuclear warheads are deployed on Trident II SLBMs, and the potential for a near undetectable, invulnerable assured second strike capability has made SSBNs historically stability-enhancing by reducing the incentives for a first strike. If detection and tracking technology continues to progress, however, the ability of SLBMs to hold adversaries at risk decreases while the compunction to “use it or lose it” is likely to increase.[\[10\]](#_ftn10) As UUVs are _detectable_ (particularly compared to passive sonar and hydrophone systems), adversaries are also more likely to know when they have been detected and act accordingly. As a result, UUVs have the potential to collapse the amount of time available for adversary decision-making by making their force positions known.

Increased detection and tracking capabilities may also contribute to a _perception of an advantage_ as players get a better-resolved picture of adversary capabilities and the location of forces. As states grow more confident in their assessment of adversary capabilities related to the hitherto survivable submarine leg of the triad, they may assess the risks of an adversary second strike to be lower than previously was the case. For example, if one actor perceives their UUVs provide sufficient situational awareness that they may attempt a disarming counterforce strike, significant strategic stability risks arise from a first strike incentive. What are the implications of this situation? Should UUVs be brought under some form of arms control agreement that limits their proliferation to ensure SSBNs remain survivable? If the oceans are transparent, are countries likely to rely more on road-mobile ICBMs, heavy bombers with ALCMs, and other forms of enhancing force survivability? While robust ASW technologies represent an exceptional enhancement of situational awareness capabilities at sea, the potential impact of mature UUV detection and tracking technologies also poses first strike instabilities that translate to serious risks to nuclear stability.

***

[\[1\]](#_ftnref1) In contrast to manned systems that require a link to an operator for directions, unmanned vehicles are being developed to operate autonomously—decreasing the likelihood of detection. UUV “swarms” may also be able to trade the destruction of individual vehicles for the advantage of persistent observation.

[\[2\]](#_ftnref2) An example of advanced sensors for ASW systems is Raytheon’s PROSAS PS60-6000 Synthetic Aperture Sonar.

[\[3\]](#_ftnref3) Limited information is available in the open literature regarding sensor range and resolution for advanced ASW systems, but the detection range is expected to be 10s to 1000s of km, depending on ocean conditions and other factors. See for example E.V. Miasnikov, _The Future of Russia's Strategic Nuclear Forces: Discussions and Arguments,_ Published by the Center for Arms Control, Energy, and Environmental Studies at MPTI, Dolgoprudny, 1995.

[\[4\]](#_ftnref4) More nascent detection technologies including ACTUV—an unmanned surface UMV—and Superconducting Quantum Interference Devices (SQUID) for magnetic anomaly detection (MAD) also seek to increase existing detection capabilities.

[\[5\]](#_ftnref5) Advances in low frequency radio and laser optical communications enhance the continuous collection of information concerning adversary assets. Existing programs designed to do this include the AMEGA system noted above as well as new research on blue and green laser diodes that allow for optical wireless communication with underwater systems.

[\[6\]](#_ftnref6) This would require further advancements in other technologies and integration of these capabilities across technologies.

[\[7\]](#_ftnref7) The DARPA Hydra program attempts to remedy this by creating stealthy UUVs.

[\[8\]](#_ftnref8) It is also worth noting that UUVs may also be deploying in de-mining operations, decreasing the ability of an adversary to perform anti-access area denial (A2AD) operations.

[\[9\]](#_ftnref9) In particular, the 2018 NPR repeats the 2010 language “SSBNs are, at present, virtually undetectable, and there are no known, near-term credible threats to the survivability of the SSBN force.”

[\[10\]](#_ftnref10) This type of logic train has already been explored in the case of ICBMs at the outset of a great power war.

***