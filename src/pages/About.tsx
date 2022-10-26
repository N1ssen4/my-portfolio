import { NextPage } from "next";
import About from "../components/about/About";
import Freetime from "../components/freetime/Freetime";
import Skills from "../components/skills/Skills";

const AboutPage: NextPage = () => {
  return (
    <main className="min-h-screen items-center justify-center p-4 lg:px-40 xl:px-96">
      <div className="static h-full overflow-y-auto pt-12 pb-12">
        <div className="mx-8 space-y-8 md:mx-20">
          <About
            content="My name is Mads Rosenlund Nissen. I am 24 years old. I'm a fresh young
      man with experience in customer service both in person and remote. I am
        very responsible and a fast learner. I am quite outgoing, and I always
        have a drive to make a difference. I see myself as a happy, funny and
        smiling colleague. I think it is very important to have a good
        relationship with my colleagues, and I think that reflects in the work.
        I am flexible about working hours, and I appreciate when there's
        flexibility from the company."
          />
          <Freetime content="In my free-time I spend a lot of time playing football and handball. I am very interested in football, and I would also gladly use my free-time watching it. Running is also one of my big interests, which I also use much of my time on. Besides sport and running I use much time on my friends playing boardgames and go out to drink a beer or two. I also use some time gaming with my friends in weekends where I don't go out." />
          <Skills
            skillinfo={[
              { skilltitle: "Java & Python", skillnumber: 65 },
              { skilltitle: "Javascript/Typescript", skillnumber: 80 },
              { skilltitle: "React & React Native", skillnumber: 80 },
              { skilltitle: "HTML, CSS & TailwindCSS", skillnumber: 90 },
              { skilltitle: "Git & Github", skillnumber: 80 },
              {
                skilltitle: "Machine Learning (Kera, Tensorflow, Pandas)",
                skillnumber: 40,
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};
export default AboutPage;
