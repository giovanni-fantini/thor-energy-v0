class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :journeys, :about, :contact]

  def home
  end

  def about
    @bios = [
      {
        first_name: "Giovanni",
        last_name: "Fantini",
        age: 23,
        email: "gio@thor.energy",
        description: "B.Sc. in Finance at Bocconi University. While studying he
worked in a restaurant business for 2 years starting as waiter
and ending managing 2 points of sale within Expo Milan.
He also was in charge of a student association for
entrepreneurship promotion, and attended a 6 months hands-
on course on the Lean StartUp methodology sponsored by
Microsoft and JP Morgan.
Later worked 1.5y in Investment Banking (Lazard and Morgan
Stanley) before deciding to quit his job and follow his dream of
changing the way energy is produced, distributed, consumed
and exchanged.
Proficient in 3 languages. Skilled in Ruby, Ruby on Rails,
JavaScript, HTML and CSS. Expert user of Microsoft Office.
Versed in writing and public speaking.
Has performed a volunteering experience in Panama for
reforestation and the care of damaged communities.
35 countries visited, lived in 4."
      },
      {
        first_name: "Giacomo",
        last_name: "Camisassa",
        age: 24,
        email: "giacomo@thor.energy",
        description: "B.Sc. in Economics, M.Sc. In Management from Bocconi
University, Post Graduate Program in Management from the
Indian Institute of Management - Ahmedabad. While studying,
he worked for 2 years and then led as sole legal responsible for
1 year a student-run consulting company with multinational
clients achieving €200k yearly revenues and the award for 2nd
best in Europe.
Recently interned at Bain & Company working on tech cases
and decided to join Thor Energy to make a jump in the future,
following the dream of a friend and his firm belief in the power
of the sharing economy in the energy sector.
Has performed volunteering experiences in US for troubled
children support and in India for reducing
sexual
discrimination in schools in rural areas.
37 countries visited, lived in 5."
      },
      {
        first_name: "Laura",
        last_name: "Lezcano",
        age: 25,
        email: "laura@thor.energy",
        description: "B.D. in Digital Animation at the Latin
University of Panama and Master in
Design at Istituto Europeo di Design.
Works with clients from around the
world and developed projects for the
Panamanian government, for the
European Union (Italy & France) and
multimedia projects for the
transportation sector within
Tuscany, Italy. Fluent in 4 languages
and has gone abroad as a volunteer
teaching Spanish and English. Laura
and Giovanni met when he was
volunteering for AIESEC in Panama."
      },
      {
        first_name: "Matteo",
        last_name: "de Cicco",
        age: 30,
        email: "matteo@thor.energy",
        description: "B.Sc. In Electronics Engineering at University of Rome – Tor
Vergata and M.Sc. In Electrical and Electronics Engineering –
Embedded System at University of Birmingham. He lead the
engineering departments of three hardware startups in the IoT
and wearables space.
As the Lead Engineer at FlickTek, he took part in the HAX
acceleration program in Shenzhen, being in charge of hardware
and firmware development from early stage prototypes to
mass production. He consulted several companies and startups
on both technical and business aspects.
Riccardo and Giovanni met at a meeting for alumni of
Innovaction Lab, a 6 months boot camp on Lean StartUps. He
now embraced the vision of Thor Energy following his passion
for urban tech, IoT and smart cities."
      },
      {
        first_name: "Riccardo",
        last_name: "Arciulo",
        age: 35,
        email: "riccardo@thor.energy",
        description: "B.Sc. in Electronics Engineering and M.Sc, in Robotics and Automation Engineering.
        He was responsible for the hardware design and robot programming for several firms during his
        career besides co-founding two companies on its own. He supports and mentors startups from idea
        to go-to-market on both engineering and business themes. Riccardo and Giovanni met at a meeting
        for alumni of Innovation Lab, a 6 months bootcamp on Lean StartUps."
      },
      {
        first_name: "Alessandro",
        last_name: "Francia",
        age: 28,
        email: "alessandro@thor.energy",
        description: "B.Sc. and M.Sc. in Computer Science. Currently Implementation leader in IGT (gaming)
        he spent several years in the company working first as a Software Developer and then as Technical
        Lead between Rome and London. He also covered the roles as CTO and Senior Frontend Developer in two
        startups and worked on several software development projects as a freelancer. Alessandro and Giovanni
        met at a meeting for alumni of Innovaction Lab, a 6 months bootcamp on Lean StartUps."
      },
      {
        first_name: "Masaki",
        last_name: "Noguchi",
        age: 23,
        email: "masaki@thor.energy",
        description: "B.Sc in Business Administration from the University of California, Berkeley.
        Worked in the technology investment banking division of William Blair & Co. in San Francisco, CA,
        focusing on M&A and ECM for mid to large cap companies. Studied front-end & back-end web application
        development at Le Wagon where he met Sam and Giovanni. Mixed Martial arts competitor and hobbyist."
      },
      {
        first_name: "Sam",
        last_name: "Jenkins",
        age: 23,
        email: "sam@thor.energy",
        description: "B.A. in Physics and Philosophy at the University of Oxford. Upon graduation Sam
        moved to London to study web-development and programming at Le Wagon, where he met Masaki and
        Giovanni. Academic research includes investigating the relative effectiveness of radiotherapies
        in oncology. Former sailing coach with the British youth team. He also competes at an
        international level himself."
      }
    ]
  end

  def journeys
  end

  def contact
  end
end
