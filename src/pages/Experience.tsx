import { NextPage } from "next";
import Experience from "../components/experience/Experience";
const ExperiencePage: NextPage = () => {
    return (
      <>
        <main className="min-h-screen items-center justify-center p-4 lg:px-40 xl:px-96">
          <div className="static h-full overflow-y-auto pt-12 pb-12">
            <div className="mx-8 space-y-8 md:mx-20">
              <Experience
                jobinfo={[
                  {
                    jobtitle: "Intern",
                    company: "Dreamplan, Copenhagen",
                    employmenttime: "August 2022 - October 2022",
                    jobdescription:
                      "In this 10 week internship I have learned alot. Using NextJS, React and Tailwind i have together with two other interns created different apps speaking with mutiple apis. I have learned about TRPC and validation with Zod. Furthermore valuable experience with Git/Github suing it in an actual working enviornment. In Dreamplan we used the agile project management Scrum.",
                  },
                  {
                    jobtitle: "IT Student Help",
                    company: "Arriva, Kastrup",
                    employmenttime: "March 2020 - February 2022",
                    jobdescription:
                      "Internal IT support for all Arriva Denmark employees. User login problems, making sure users have the right accesses and licenses, and other ad Hoc IT problems Worked with SAP, WiNi, SeMa, Microsoft 365 environments.",
                  },
                  {
                    jobtitle: "1. Assistent",
                    company: "Netto, Lyngby",
                    employmenttime: "October 2019 - April 2020",
                    jobdescription:
                      "Making sure the experience for the customers is great. The queue-time is short and that the store is neat and presentable. Experience as a leader for the under-18 workers and making sure they perform their best.",
                  },
                  {
                    jobtitle: "Business Supporter",
                    company: "H. Dam Kærgaard A/S, Copenhagen",
                    employmenttime: "September 2017 - June 2018",
                    jobdescription:
                      "Mostly customer-service for users calling in. Order processing and making sure we sent out the correct amount of items the users need. Small Involvement in product development and quality control.",
                  },
                ]}
              />
            </div>
          </div>
        </main>
      </>
    );
}
export default ExperiencePage;