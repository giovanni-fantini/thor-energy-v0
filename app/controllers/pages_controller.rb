class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :journeys, :about, :contact]

  def home
  end

  def about
    @bios = [
      {
        first_name: "Giovanni",
        last_name: "Fantini",
        email: "gio@thor.energy",
        description: "B.Sc. in Finance at Bocconi University. While studying he
        worked in a restaurant business for 2 years starting as waiter and ending
        managing 2 points of sale within Expo Milan. He also was in charge
        of a student association for entrepreneurship promotion, and attended a
        6 months hands-on course on the Lean StartUp methodology sponsored by Microsoft and JP Morgan.
        Has performed volunteering experience in Panama for reforestation and the care of
        damaged communities. Later worked 1.5y in Investment Banking (Lazard and Morgan Stanley)
        before deciding to follow his dream of changing how people interact and consume electricity.
        Proficient in 3 natural languages and 1 computer programming one.
        Versed in writing and public speaking. 32+ countries visited, lived in 4."
      },
      {
        first_name: "Giacomo",
        last_name: "Camisassa",
        email: "giacomo@thor.energy",
        description: "B.Sc. in Economics, M.Sc. In Management from Bocconi University,
        Post Graduate Program in Management from the Indian Institute of Management - Ahmedabad.
        Since Bachelor years for 3 years, while studying, worked for and then led as sole legal
        responsible a student-run consulting company with multinational clients achieving €200k
        yearly revenues and the awarded 2nd best in Europe.
        Has performed volunteering experiences in US for troubled children support and in India
        for reducing  sexual discrimination in schools in rural areas. Recently interned at
        Bain & Company working on tech cases and decided to join Thor Energy to make a jump
        in the future, following the dream of a friend and his firm belief in the power of
        the sharing economy in the energy sector. 37 countries visited, lived in 5."
      },
      {
        first_name: "Laura",
        last_name: "Lezcano",
        email: "laura@thor.energy",
        description: "B.D. in Digital Animation at the Latin University of Panama and Master
        in Design at Istituto Europeo di Design. Works with clients from around the world
        and developed projects for the Panamanian government, for the European Union
        (Italy & France) and multimedia projects for the transportation sector within Tuscany, Italy.
         Fluent in 4 languages and has gone abroad as a volunteer teaching Spanish and English."
      },
      {
        first_name: "Matteo",
        last_name: "de Cicco",
        email: "matteo@thor.energy",
        description: "B.Sc. In Electronics Engineering and M.Sc. In Electrical and Electronics Engineering
        – Embedded System. Currently Head of Engineering at Hanhaa (IoT) he was previously in charge of
        hardware and software development of FlickTek, company successfully incubated in HAX, as well as
        having worked as hardware and embedded system engineer for several startups.  Riccardo and Giovanni
        met at a meeting for alumni of Innovaction Lab, a 6 months bootcamp on Lean StatUps.."
      },
      {
        first_name: "Riccardo",
        last_name: "Arciulo",
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
        email: "masaki@thor.energy",
        description: "B.Sc in Business Administration from the University of California, Berkeley.
        Worked in the technology investment banking division of William Blair & Co. in San Francisco, CA,
        focusing on M&A and ECM for mid to large cap companies. Studied front-end & back-end web application
        development at Le Wagon where he met Sam and Giovanni. Mixed Martial arts competitor and hobbyist."
      },
      {
        first_name: "Sam",
        last_name: "Jenkins",
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
